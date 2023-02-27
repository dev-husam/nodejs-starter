const { HttpErrorException } = require("../expections/httpError.exception");

function errorHandlerMiddleware(err, req, res, next) {
    console.log({ status: "error", error: err.name })
    if (err instanceof HttpErrorException) {
        return res.status(err.statusCode).json({ status: "failed", message: err.message, data: null })
    }
    if (err.name == "MongoServerError") {

    }

    return res.status(500).json({ status: "failed", message: "internal server error", data: null })
}


module.exports = { errorHandlerMiddleware }