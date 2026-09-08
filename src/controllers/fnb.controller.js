const prisma = require("../helpers/prisma");

const getFnbs = async (req, res, next) => {
  try {
    const search = req.query.search?.trim() || "";

    const result = await prisma.fnb.findMany({
      where: search
        ? {
            OR: [
              {
                name: {
                  contains: search,
                },
              },
              {
                category: {
                  contains: search,
                },
              },
            ],
          }
        : {},
      orderBy: {
        name: "asc",
      },
    });

    res.status(200).json({ data: result });
  } catch (error) {
    next(error);
  }
};

module.exports = { getFnbs };
