const mongoose = require('mongoose');

const captionModel = new mongoose.Schema({
    fullname:{
        type:String,
        required:true,
        minlength:[4,"Minimum length is 4 characters"]
    },
    email:{
        type:String,
        required:true,
        unique:true,
        match:[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please enter a valid email address"]
    },
    password:{
        type:String,
        required:true,
        minlength:[6,"Minimum length is 6 characters"],
        Selection:false,
    },
    socketId:{
        type:String,
    },
    status:{
        type:String,
        default:"offline",
        enum:["online","offline"]
    },
    vechile:{
        color:{
            type:String,
            required:true,
        },
        number:{
            type:String,
            required:true,
        },
        capacity:{
            type:Number,
            required:true,
        },
        type:{
            type:String,
            required:true,
            enum:["car","bike","auto"],
        }
    },
    location:{
        lat:{
            type:Number,
        },
        lng:{
            type:Number,
        },
    }
})

module.exports = mongoose.model('Caption',captionModel);