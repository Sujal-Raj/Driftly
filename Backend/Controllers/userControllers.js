const User = require("../models/userModel");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const addUser = async (req, res) => {
    try {
        // console.log(req.body);
        const { name, email, password } = req.body;

        // Fix 1: Correct status method chaining
        if (!name || !email || !password) {
            return res.status(400).json({ message: "Please provide all of the fields" });
        }

        const existingUser = await User.findOne({ email });
        
        // Fix 2: Correct status method chaining
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        
        // Fix 3: Use User model instead of lowercase 'user'
        const newUser = new User({
            name,
            email,
            password: hashedPassword,
        });

        await newUser.save();
        
        return res.status(201).json({ message: "User created successfully" });

    } catch (error) {
        console.error(error); // Log the actual error for debugging
        return res.status(500).json({ message: "Internal Server Error" });
    }
}



const loginUser = async (req,res)=>{
    try {
        // console.log(req.body);
    const {email,password} = req.body;

    if(!email ||!password){
        return res.status(400).json({message: "Please provide all the fields"});
    }

    const user = await User.findOne({ email }).select('+password');

    if(!user){
        return res.status(404).json({message: "User not found"});
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch){
        return res.status(400).json({message: "Invalid credentials"});
    }

    const token = jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:"1h"});

    res.cookie("token",token,{
        httpOnly:true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "none",
        path:"/"
    });

    return res.status(200).json({message: "Login successful"});
        
    } catch (error) {
        console.log(error.message); 
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

const getUserProfile = async (req,res)=>{
    // console.log(req.user)
    return res.status(200).json(req.user);
}

module.exports = {
    addUser,
    loginUser,
    getUserProfile
};