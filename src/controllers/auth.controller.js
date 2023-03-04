const { HttpErrorException } = require("../expections/httpError.exception")
const usersModel = require("../models/users.model")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const EnvVariables = require("../config/env.config")

async function login(req, res, next) {


}
async function register(req, res, next) {

    const { email, password, phone, fullName } = req.body
    try {
        const existUser = await usersModel.findOne({ email })
        // if (existUser) throw new HttpErrorException(422, "user already exist with the same email address")
        const hashedPassword = await bcrypt.hash(password, 12)
        const createdUser = await usersModel.create({ email, password: hashedPassword, phone, fullName })

        const token = getToken({ id: createdUser._id })
        return res.status(200).json({ status: "success", data: { user: createdUser, accessToken: token } })
    } catch (error) {
        console.log(error.stack)
        error.path = __filename
        next(error)
    }



    function getToken(payload, exp = "7d") {
        return jwt.sign(payload, EnvVariables.JWT_SECRET_KEY, { expiresIn: exp })
    }


}

module.exports = { login, register }