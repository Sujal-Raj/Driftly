const Caption = require("../models/captionModel")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const addCaption = async (req,res)=>{
    try {
        // console.log(req.body);
        const {fullname,email,password} = req.body;
        const {color,number,capacity,type}= req.body.vechile;

        if(!fullname || !email || !password || !color || !capacity || !type || !number){
            return res.status(400).json({message: "Please provide all the fields required."});
        }

        const existingCaption = await Caption.findOne({email});

        if(existingCaption){
            return res.status(400).json({message: "User already exists"});
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new Caption({
            fullname,
            email,
            password: hashedPassword,
            vechile:{
                color,
                number,
                capacity,
                type
            }
        });

        await newUser.save();

        return res.status(201).json({ message: "Caption created successfully" });
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({message: "Internal Server Error"})
    }

}

const loginCaption = async (req,res)=>{
    try {
        // console.log(req.body);
        const {email, password} = req.body;

        if(!email ||!password){
            return res.status(400).json({message: "Please provide all the fields"});
        }
        const user = await Caption.findOne({email}).select("+password");
        if(!user){
            return res.status(404).json({message: "User not found"});
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({message: "Invalid credentials"});
        }
        const token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: '1h'});
        res.cookie("token",token,{
            httpOnly:true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "none",
            path:"/"
        });

        return res.status(200).json({message: "Login sucessful"});
        
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({message: "Internal Server Error"})
    }
}

const getCaption = async (req,res)=>{
    return res.status(200).json(req.caption)
}

module.exports = {addCaption,loginCaption,getCaption};