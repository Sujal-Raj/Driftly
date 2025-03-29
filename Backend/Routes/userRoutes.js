const express = require('express');
const router = express.Router();
const {addUser,loginUser,getUserProfile} = require("../Controllers/userControllers");
const userAuth = require('../middlewares/userAuth');
// Register user
router.post("/adduser",addUser);

//Login user
router.post("/loginuser",loginUser);

router.get("/profile",userAuth,getUserProfile)

module.exports = router;