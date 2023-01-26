const mongoose = require('mongoose')

//user Schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    cnic: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    officialEmail: {
        type: String,
    },
    mobile: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    examDate: {
        type: String,
        required: true
    },
    disability: {
        type: String,
    },
    terms: {
        type: String,
        required: true
    },
    emialToken: {
        type: String,
        required: true
    },
    isVerified: {
        type: Boolean
    },
    date: {
        type: Date,
        default: Date.now()
    }
})
const userModel = mongoose.model("User",userSchema)
module.exports = userModel