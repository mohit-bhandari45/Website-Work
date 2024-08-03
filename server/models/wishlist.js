const mongoose = require("mongoose")

const wishlistItemSchema = mongoose.Schema({
    itemId: {
        type: String,
        required: true
    },
    addedAt: {
        type: Date,
        default: () => {
            return new Date()
        }
    }
})

const wishlistSchema = mongoose.Schema({
    user_Id: {
        type: String,
        required: true
    },
    items: [wishlistItemSchema]
})

const Wishlist = mongoose.model("wishlist", wishlistSchema)
module.exports = Wishlist