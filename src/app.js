//packages
const express = require("express")
const { connectToDb } = require("./config/database.config")
require("dotenv").config()

//locals 


//variables
const app = express()
const port = process.env.PORT || 5001

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

connectToDb(process.env.MONGO_URI)
app.listen(port, (res) => {
    console.log(`app is listing on port ${port}`)
})