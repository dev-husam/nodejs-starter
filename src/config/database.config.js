const mongoose = require("mongoose")


function connectToDb(url) {
    mongoose.set('strictQuery', true)
    mongoose.connect(url, {

    }).then(res => {
        console.log("database connected successfully")
    }).catch(error => {
        console.log({
            status: "error",
            message: error.message
        })
        process.exit(1)
    })
}



module.exports = { connectToDb }