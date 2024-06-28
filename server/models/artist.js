const mongoose = require("mongoose")

const artistSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique:true
    }
})

const Artist = mongoose.model("artist", artistSchema)
module.exports = Artist