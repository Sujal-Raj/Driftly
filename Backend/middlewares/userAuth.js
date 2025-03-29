const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const userAuth =async  (req,res,next)=>{

    const token = req.cookies?.token || req.headers.authorization?.split(' ')[1];
    // console.log(token)
    if(!token){
        return res.status(401).json({message: "Token not provided"});
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.id);
        if(!user){
            return res.status(401).json({message: "User not found"});
        }
        req.user = user;
        next();
    } catch (error) {
        console.log(error);
        return res.status(401).json({message: "Token is invalid"});
    }
}

module.exports = userAuth;