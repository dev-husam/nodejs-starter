//packages
const express = require("express")
require("dotenv").config()
require("express-async-errors")

//locals 

const { connectToDb } = require("./config/database.config")
const { errorHandlerMiddleware } = require("./middlewares/errorHandler.middleware")
const notFoundMiddleware = require("./middlewares/notFound.middleware")

//routes
const usersRouter = require("./routes/users.routes")
const authRouter = require("./routes/auth.routes")
const EnvVariables = require("./config/env.config")

//variables
const app = express()
const port = EnvVariables.PORT

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get("/api/v1", (req, res) => {
    res.send("ok")
})
app.use("/api/v1/auth", authRouter)
app.use("/api/v1/users", usersRouter)

app.use("*", notFoundMiddleware)
app.use(errorHandlerMiddleware)


connectToDb(EnvVariables.MONGO_URI)
const server = app.listen(port, () => {
    console.log(`app is listing on port ${port}`)
    console.log(`app is started on http://localhost:${port}/api/v1`)
})
