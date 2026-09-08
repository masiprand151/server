const express = require("express");
const cors = require("cors");
const AppError = require("./helpers/AppError");
require("dotenv").config();

const web = express();
web.use(
  cors({
    origin: "*",
  }),
);

web.use(express.json());

web.use(require("./routes/user.route"));
web.use(require("./routes/room.route"));
web.use(require("./routes/session.route"));
web.use(require("./routes/fnb.route"));

web.use((err, req, res, next) => {
  console.log(err);

  if (!err) {
    next();
  }

  if (err instanceof AppError) {
    return res.status(err.status).json({
      error: err.message,
    });
  } else {
    return res.status(500).json({
      error: "Internal Server Error!",
    });
  }
});

web.listen(3000, () => {
  console.log(`App runnung: `, 3000);
});
