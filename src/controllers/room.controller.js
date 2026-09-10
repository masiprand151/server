const AppError = require("../helpers/AppError");
const { invoiceNumber } = require("../helpers/generate");
const prisma = require("../helpers/prisma");

const getRoomWithSession = async (req, res, next) => {
  try {
    const rooms = await prisma.room.findMany({
      include: {
        session: {
          where: {
            closed: false,
          },
          include: {
            customer: true,
          },
        },
      },
    });

    const data = rooms.map((room) => ({
      ...room,
      session: room.session[0] || null, // ambil session pertama
    }));

    res.status(200).json({ data });
  } catch (error) {
    next(error);
  }
};

const getRoomById = async (req, res, next) => {
  try {
    const { roomId } = req.params;

    const result = await prisma.room.findUnique({
      where: {
        id: Number(roomId),
      },
    });

    if (!result) {
      throw new AppError(404, "Room not found");
    }

    if (result.status !== "AVAILABLE") {
      throw new AppError(400, "Room not available");
    }

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const checkIn = async (req, res, next) => {
  try {
    const {
      roomId,
      customer,
      phone,
      priceType,
      duration,
      packageId,
      promoId,
      note,
    } = req.body;

    if (!customer) {
      throw new AppError(400, "the customer name must be filled in");
    }

    const result = await prisma.$transaction(async (trx) => {
      const room = await trx.room.findUnique({
        where: {
          id: Number(roomId),
        },
      });

      if (!room) {
        throw new AppError(404, "Room not found");
      }

      if (room.status !== "AVAILABLE") {
        throw new AppError(400, "Room not available");
      }

      // hitung waktu
      const startTime = new Date();
      const endTime = new Date(
        startTime.getTime() + Number(duration) * 60 * 1000,
      );
      const INV = invoiceNumber("INV");

      // hitung
      const setting = await trx.setting.findFirst({
        where: {
          isActive: true,
        },
      });

      const hour = Number(duration) / 60;

      const subTotal = Number(room.hourlyRate) * Number(hour);
      const tax = (subTotal * Number(setting.taxPercent)) / 100;
      const service = (subTotal * Number(setting.servicePercent)) / 100;

      const grandTotal = subTotal + tax + service;

      // create new customer
      const cust = await trx.customer.create({
        data: {
          name: customer,
          phone: phone,
        },
      });

      const session = await trx.session.create({
        data: {
          customerId: cust.id,
          roomId: room.id,
          startTime,
          endTime,
          durationMinute: duration,
          userId: req.user.id,
        },
      });

      const transaction = await trx.transaction.create({
        data: {
          id: INV,
          sessionId: session.id,
          roomTotal: subTotal,
          subTotal: subTotal,
          tax: tax,
          service: service,
          grandTotal: grandTotal,
          note: note,
        },
      });

      const updatedRoom = await trx.room.update({
        where: {
          id: room.id,
        },
        data: {
          status: "OCCUPIED",
        },
      });

      return {
        room: updatedRoom,
        transaction,
        session,
      };
    });

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { getRoomWithSession, getRoomById, checkIn };
