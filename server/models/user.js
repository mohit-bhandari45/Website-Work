const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique:true
    }
})

const User = mongoose.model("user", userSchema)
module.exports = User