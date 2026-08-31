const AppError = require("../helpers/AppError");
const prisma = require("../helpers/prisma");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    // tidak boleh kosong
    if (!username || !password) {
      throw new AppError(400, "Username or password cannot be empty");
    }

    const user = await prisma.user.findUnique({
      where: {
        username,
      },
    });

    if (!user) {
      throw new AppError(400, "Incorrect username or password");
    }

    const valid = await bcrypt.compare(password.trim(), user.password);
    if (!valid) {
      throw new AppError(400, "Incorrect username or password");
    }

    const token = jwt.sign(
      {
        id: user.id,
        username: user.username,
      },
      process.env.JWT,
      { expiresIn: "1d" },
    );

    res.status(200).json({
      data: {
        user: {
          id: user.id,
          username: user.username,
          role: user.role,
        },
        token,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { login };
