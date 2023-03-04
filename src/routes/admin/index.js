
const router = require("express").Router()

const usersRouter = require("./users.routes")


router.use("/users", usersRouter)

router.use("/", (req, res) => {
    res.send('admin area')
})
module.exports = router