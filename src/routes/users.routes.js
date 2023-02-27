const { listUsers } = require("../controllers/users.controller")

const router = require("express").Router()


router.route("/", listUsers)



module.exports = router