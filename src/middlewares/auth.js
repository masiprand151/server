const jwt = require("jsonwebtoken");
const AppError = require("../helpers/AppError");

const SECRET_KEY = process.env.JWT;

function authorized(req, res, next) {
  const token = req.get("Authorization");

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded; // simpan payload ke req.user
    next();
  } catch (err) {
    throw new AppError(403, "Invalid or expired token");
  }
}

function admin(req, res, next) {
  const { role } = req.user;

  if (role !== "ADMIN") {
    throw new AppError(400, "Access denied");
  }

  next();
}

module.exports = { authorized, admin };
