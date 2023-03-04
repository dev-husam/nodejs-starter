const mongoose = require("mongoose")


function connectToDb(url) {

    mongoose.set('strictQuery', true)
    mongoose.connect(url, {

    }).then(res => {
        console.log({ status: "success", message: "database connected successfully" })
    }).catch(error => {
        console.log({ status: "error", message: error })
        process.exit(1)
    })
}



module.exports = { connectToDb }