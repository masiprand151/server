const AppError = require("../helpers/AppError");
const prisma = require("../helpers/prisma");

const getRoomWithSession = async (req, res, next) => {
  try {
    const rooms = await prisma.room.findMany({
      include: {
        session: {
          where: {
            closed: false,
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

module.exports = { getRoomWithSession };
