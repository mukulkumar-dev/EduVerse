const router = require("express").Router();
const userController = require("../controller/userController");

//signup api
router.post("/signup", userController.signupUser);

//login api
router.post("/login", userController.loginUser);

//check cookie
router.get("/check-cookie", userController.checkCookie);

//logout
router.post("/logout", userController.logoutUser);

module.exports = router;