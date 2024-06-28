const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    artistId: {
        type: String,
        required: true
    },
    discount: Number,
    imageUrl: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    mainPrice: Number,
    prevPrice: Number,
    description: {
        type: String,
        required: true
    }
})

const Product = mongoose.model("product", productSchema)
module.exports = Product