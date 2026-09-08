const router = require("express").Router();
const controller = require("../controllers/fnb.controller");
const auth = require("../middlewares/auth");

router.get("/fnb", auth.authorized, controller.getFnbs);

module.exports = router;
