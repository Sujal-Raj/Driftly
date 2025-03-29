const mongoose = require('mongoose');

// Connect to MongoDB

const connectToDB = ()=>{
    mongoose.connect(process.env.MONGO_URI, {
        // useNewUrlParser: true,
        // useUnifiedTopology: true
    })
   .then(() => console.log('MongoDB Connected...'))
}

module.exports = connectToDB;