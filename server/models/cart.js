const mongoose = require("mongoose")

const cartItemSchema = mongoose.Schema({
    count: {
        type: Number,
        default: 1
    },
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

const cartSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    items: [cartItemSchema]
})

const Cart = mongoose.model("cart", cartSchema)
module.exports = Cart