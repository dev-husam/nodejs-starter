const usersModel = require("../models/users.model")

async function listUsers(req, res, next) {
    const users = await usersModel.find({})

}


module.exports = { listUsers }