const { HttpErrorException } = require("../expections/httpError.exception");

function errorHandlerMiddleware(err, req, res, next) {
    console.log(err);
    if (err instanceof HttpErrorException) {
        return res.status(err.statusCode).json({ status: "failed", message: err.message, data: null })
    }
    else if (err.code == 11000) {
        return res.status(400).json({ status: "failed", message: `duplicated field value [${Object.keys(err.keyValue)}] `, data: null })
    }

    return res.status(500).json({ status: "failed", message: "something went wrong", data: null })
}


module.exports = { errorHandlerMiddleware }