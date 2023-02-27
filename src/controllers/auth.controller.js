const { HttpErrorResponse, httpStatusCodes } = require("../expections/httpError.exception")
const usersModel = require("../models/users.model")



async function login(req, res, next) {


}
async function register(req, res, next) {

    const { email, password, phone, fullName } = req.body

    const createdUser = await usersModel.create({ email, password, phone, fullName })


    return res.status(200).json({ status: "success", data: createdUser })



}

module.exports = { login, register }