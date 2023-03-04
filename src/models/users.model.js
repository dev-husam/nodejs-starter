const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({
    phone: {
        type: String,
        required: [true, "Phone field is required"],
        unique: true
    },
    email: {
        type: String,
        required: [true, "Phone field is required"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "please enter username"]
    },
    isConfirmed: {
        type: Boolean,
        default: false
    },
}, {
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model("User", userSchema)