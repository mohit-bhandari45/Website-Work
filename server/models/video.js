const mongoose = require("mongoose")

const videoSchema = mongoose.Schema({
    artistId: {
        type: String,
        required: true
    },
    videoUrl: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

const Video = mongoose.model("video", videoSchema)
module.exports = Video