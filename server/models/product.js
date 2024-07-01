const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    artistId: {
        type: String,
        required: true
    },
    discount: {
        type: Number,
        default: 0
    },
    imageUrl: {
        type: String,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    mainPrice: Number,
    prevPrice: Number,
    rating: {
        type: Number
    },
    reviews: {
        type: Number
    },
    description: {
        type: String,
        required: true
    },
    listedAt: {
        type: Date,
        default: () => {
            return new Date()
        }
    },
    releaseDate: {
        type: Date,
        default: () => {
            return new Date()
        }
    }
})

const Product = mongoose.model("product", productSchema)
module.exports = Product