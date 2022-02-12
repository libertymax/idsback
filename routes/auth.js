const express = require("express");
const router = express.Router();

const { signup, signin, signout, regNewbie } = require("../controllers/auth");
const { userSignupValidator } = require("../validator");
const { newbieValidator } = require("../validator/newbie");

router.post("/register", newbieValidator, regNewbie);
router.post("/signup", userSignupValidator, signup);
router.post("/signin", signin);
router.get("/signout", signout);

module.exports = router;

//new validators