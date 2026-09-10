const router = require("express").Router();
const controller = require("../controllers/user.controller");
const auth = require("../middlewares/auth");

router.get("/user/me", auth.authorized, controller.me);
router.post("/login", controller.login);

module.exports = router;
