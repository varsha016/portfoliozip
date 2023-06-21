const mongoose = require("mongoose")
module.exports = mongoose.model("userRegister", mongoose.Schema({
    fName: {
        type: String,
        required: true
        },
    lName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    sub: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    }
   



}, { timestamps: true }))