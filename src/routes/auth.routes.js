const { login, register } = require("../controllers/auth.controller")
const { validateRequestMiddleware } = require("../middlewares/requestValidator.middleware")
const { reqValidator, signUpSchema } = require("./validations/signUpSchema.validation")

const router = require("express").Router()


router.post("/login", login)
router.route("/register").post(validateRequestMiddleware(signUpSchema), register)




module.exports = router


