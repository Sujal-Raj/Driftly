const Caption = require("../models/captionModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");


const captionAuth = async(req,resizeBy,next)=>{
    const token = req.cookies?.token|| req.headers.authorization.split(" ")[1];
    if(!token){
        return res.status(401).json({ message: "Not authorized to access this resource" });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const caption = await Caption.findById(decoded.id);
                if(!caption){
                    return res.status(401).json({message: "Caption not found"});
                }
                req.caption = caption;
                next();

        
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

module.exports = captionAuth;