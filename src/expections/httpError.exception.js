
class HttpErrorException extends Error {
    constructor(statusCode, message) {
        super(message)
        this.statusCode = statusCode
    }
}



function HttpErrorResponse(statusCode = 500, message = "internal server error") {
    throw new HttpErrorException(statusCode, message)
}

const httpStatusCodes = {
    OK: 200,
    BAD_REQUEST: 400,
    NOT_FOUND: 404,
    INTERNAL_SERVER: 500
}

module.exports = { httpStatusCodes, HttpErrorException, HttpErrorResponse }