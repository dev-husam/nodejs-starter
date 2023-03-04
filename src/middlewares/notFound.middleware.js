const { httpStatusCodes } = require("../expections/httpError.exception");

function notFoundMiddleware(req, res, next) {

    return res.status(httpStatusCodes.NOT_FOUND).json({ status: "failed", message: "routes not found", data: null })
}


module.exports = notFoundMiddleware