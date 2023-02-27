const { HttpErrorException } = require("../expections/httpError.exception")

function validateRequestMiddleware(schema) {
    return (req, res, next) => {
        const result = reqValidator.validate(req.body, schema)
        if (result.valid) return next()
        throw new HttpErrorException(400, "invalid body donnot send it again")
    }
}

module.exports = { validateRequestMiddleware }