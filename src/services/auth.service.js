const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const usersModel = require("../models/users.model")
const { HttpErrorException, httpStatusCodes } = require("../expections/httpError.exception")
const EnvVariables = require("../config/env.config")


async function validateUserLogin(email, password) {
    const existUser = await usersModel.findOne({ email })
    if (!existUser || (existUser && !bcrypt.compare(password, existUser.password))) throw new HttpErrorException(httpStatusCodes.BAD_REQUEST, "invalid credentials")
}


async function logUserIn(email) {
    const user = await usersModel.findOne({ email }, { password: 0 })
    const token = getToken({ id: user._id })
    return { user, accessToken: token }
}

function getToken(payload, exp = "7d") {
    return jwt.sign(payload, EnvVariables.JWT_SECRET_KEY, { expiresIn: exp })
}


module.exports = { logUserIn, validateUserLogin }