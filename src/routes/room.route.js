const router = require("express").Router();
const controller = require("../controllers/room.controller");
const auth = require("../middlewares/auth");

router.get("/room/status", auth.authorized, controller.getRoomWithSession);
router.get("/room/:roomId", auth.authorized, controller.getRoomById);
router.post("/room/checkin", auth.authorized, controller.checkIn);

module.exports = router;
