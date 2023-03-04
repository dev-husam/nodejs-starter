const { listUsersHandler } = require("../../controllers/admin/users.controller")

const router = require("express").Router()

router.get("/", listUsersHandler)


module.exports = router