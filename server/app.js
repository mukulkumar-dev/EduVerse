const express = require("express");
const app=express();
const cookieParser = require("cookie-parser");
const cors =  require("cors");

require("dotenv").config();
require("./conn/conn");
const userApi = require("./routes/user");

// import conn from "./conn/conn.js";
// import dotenv from "dotenv";
app.use(cors({
    origin: ["http://localhost:5173"],
    credentials:true,
}));

app.use(express.json());
app.use(cookieParser());
app.use("/api/v1", userApi);

//Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    // conn();
    console.log(`Server Started at ${PORT}`);
});