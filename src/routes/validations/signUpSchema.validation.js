const Validator = require('jsonschema').Validator;
const reqValidator = new Validator();

const signUpSchema = {
    "id": "signUpSchema",
    "type": "object",
    "properties": {
        "email": { "type": "string", formate: "email" },
        "phone": { "type": "string" },
        "fullName": { "type": "string" },
    },
    required: ["email", "phone"]
}

reqValidator.addSchema(signUpSchema, "/register")

module.exports = { reqValidator, signUpSchema }


