const usersModel = require("../../models/users.model");
const { getSkip } = require("../../utils/helpers");

async function listUsersService(filters = {}, pagination = {}) {
    const users = await usersModel.find({}, { password: 0 }, { skip: getSkip(pagination?.limit, pagination?.page) })
    return users
}


module.exports = { listUsersService }