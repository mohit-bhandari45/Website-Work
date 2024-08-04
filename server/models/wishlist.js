const mongoose = require("mongoose")

const wishlistItemSchema = mongoose.Schema({
    itemId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product', // Reference to the Product model
        required: true
    },
    addedAt: {
        type: Date,
        default: () => new Date()
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
