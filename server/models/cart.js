const mongoose = require("mongoose")

const cartItemSchema = mongoose.Schema({
    count: {
        type: Number,
        default: 1
    },
    itemId: {
        type: mongoose.Types.ObjectId,
        ref: 'Product',
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
    user_Id: {
        type: String,
        required: true
    },
    items: [cartItemSchema]
})

const Cart = mongoose.model("cart", cartSchema)
module.exports = Cart