const router = require("express").Router();
const userController = require("../controller/userController");

//signup api
router.post("/signup", userController.signupUser);

//login api
router.post("/login", userController.loginUser);

module.exports = router;