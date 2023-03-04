const { listUsersService } = require("../../services/admin/users.service")



const listUsersHandler = async (req, res, next) => {
    try {
        const { page, limit } = req.query
        const users = await listUsersService({}, { page, limit })


        res.status(200).json({ status: "success", data: users })
    } catch (error) {
        error.path = __filename
        next(error)
    }
}

module.exports = { listUsersHandler }