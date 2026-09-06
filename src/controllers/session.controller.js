const prisma = require("../helpers/prisma");
const AppError = require("../helpers/AppError");
const generate = require("../helpers/generate");
const enggine = require("../helpers/enggine");

const checkin = async (req, res, next) => {
  try {
    const {
      name,
      phone,
      duration,
      packageId = null,
      roomId,
      note = null,
    } = req.body;
    if (!roomId) throw new AppError(400, "Check-in failed");
    if (!name) throw new AppError(400, "Name is required");
    if (duration <= 0) throw new AppError(400, "Minimum duration of 1 hour");
    if (duration > 10) throw new AppError(400, "Maximum duration of 10 hour");

    // regular
    const result = await prisma.$transaction(async (trx) => {
      // ceck room
      const room = await trx.room.findUnique({
        where: {
          id: roomId,
        },
      });

      //  validasi room
      if (!room || room.status === "OFFLINE")
        throw new AppError(404, "Room not found");
      if (room.status === "OCCUPIED")
        throw new AppError(400, "The room is currently in use");
      if (room.status === "MAINTENANCE")
        throw new AppError(400, "The room is currently undergoing maintenance");

      const durationMinute = duration * 60; //covert jam ke menit

      // hitung start -> end
      const startTme = new Date();
      const endTime = new Date(startTme.getTime() + durationMinute * 60000);

      // hitung harga room per jam
      const roomTotal = (Number(room.hourlyRate) / 60) * durationMinute;
      const setting = await trx.setting.findFirst({
        where: { isActive: true },
      });
      const tax = (roomTotal * Number(setting.taxPercent)) / 100;
      const service = (roomTotal * Number(setting.servicePercent)) / 100;

      const grandTotal = roomTotal + tax + service;

      // generate unique invoice
      // get counter untuk generate invoice
      const count = await trx.transaction.count();
      const inv = generate.formatSequentialInvoice(count + 1);

      // create customer
      const customer = await trx.customer.create({
        data: {
          name: String(name).trim("").toUpperCase(),
          phone: String(phone).trim(""),
        },
      });

      // created session
      const session = await trx.session.create({
        data: {
          roomId: room.id,
          customerId: customer.id,
          startTime: startTme,
          endTime: endTime,

          durationMinute: Number(durationMinute),
          extraMinute: 0,
          freeMinute: 0,
          userId: Number(req.user.id),
        },
      });

      // created
      const transaction = await trx.transaction.create({
        data: {
          id: inv,
          sessionId: session.id,
          roomTotal: roomTotal,
          subTotal: roomTotal,
          tax: tax,
          service: service,
          grandTotal: Number(grandTotal),
          note: note,
        },
      });

      await trx.room.update({
        where: {
          id: Number(room.id),
        },
        data: {
          status: "OCCUPIED",
        },
      });

      return { room, session, transaction };
    });

    res.status(200).json({
      message: `${result.room.name} was successfully opened.`,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getSessionById = async (req, res, next) => {
  try {
    const { sessionId } = req.params;

    const session = await prisma.session.findUnique({
      where: {
        id: Number(sessionId),
      },
      include: {
        customer: true,
        room: true,
        transaction: {
          include: {
            fnbOrder: {
              include: {
                item: {
                  include: {
                    fnb: true,
                  },
                },
              },
            },

            companionOrder: {
              include: {
                companion: true,
              },
            },
            payment: true,
          },
        },
      },
    });

    res.status(200).json({
      data: {
        ...session,
        transaction: session.transaction[0],
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { checkin, getSessionById };
