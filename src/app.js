//packages
const express = require("express")
require("dotenv").config()
require("express-async-errors")

//locals 
const usersRouter = require("./routes/users.routes")
const authRouter = require("./routes/auth.routes")

const { connectToDb } = require("./config/database.config")
const { errorHandlerMiddleware } = require("./middlewares/errorHandler.middleware")
const notFoundMiddleware = require("./middlewares/notFound.middleware")

//variables
const app = express()
const port = process.env.PORT || 5001

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/api/v1/auth", authRouter)
app.use("/api/v1/users", usersRouter)

app.use("*", notFoundMiddleware)
app.use(errorHandlerMiddleware)


connectToDb(process.env.MONGO_URI)
app.listen(port, (res) => {
    console.log(`app is listing on port ${port}`)
})