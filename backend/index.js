const express = require('express')
const cors = require('cors')
const cookieParser = require("cookie-parser");
require('dotenv').config()
const connectDB = require('./config/db.js')
const router = require("./routes")


const app =express()
app.use(cors())
app.use(express.json())
app.use("/api",router)
app.use(cookieParser())

const PORT = 8080 || process.env.PORT
connectDB().then(()=>{
app.listen(PORT, () => {
  console.log("connected to db");
  console.log("Server is running");


})

})
