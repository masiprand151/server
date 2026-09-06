const router = require("express").Router();
const controller = require("../controllers/session.controller");
const auth = require("../middlewares/auth");

router.get("/session/:sessionId", auth.authorized, controller.getSessionById);
router.post("/session/open", auth.authorized, controller.checkin);

module.exports = router;
