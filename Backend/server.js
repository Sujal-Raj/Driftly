const dotenv = require('dotenv');
dotenv.config();

const connectToDB = require('./dbConfig/dbConfig');
connectToDB();

const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');


app.get("/",(req, res) => {
    res.send("Hello World");
})

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use(cookieParser());

app.use("/api/users",require("./Routes/userRoutes"));
app.use("/api/captions/",require("./Routes/captionRoutes"));

const PORT = process.env.PORT;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})