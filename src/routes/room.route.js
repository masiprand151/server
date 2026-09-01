const router = require("express").Router();
const controller = require("../controllers/room.controller");
const auth = require("../middlewares/auth");

router.get("/room/status", auth.authorized, controller.getRoomWithSession);

module.exports = router;
