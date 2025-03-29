const express = require('express');
const router = express.Router();
const {addCaption,loginCaption,getCaption} = require("../Controllers/captionController");
const captionAuth = require('../middlewares/captionAuth');


router.post("/addcaption", addCaption);
router.post("/logincaption", loginCaption);
router.get("/profile", captionAuth,getCaption);


module.exports = router;