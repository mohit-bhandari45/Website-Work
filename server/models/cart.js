const mongoose = require("mongoose")

const cartSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    itemId: {
        type: String,
        required: true
    },
    count: Number
})

const Cart = mongoose.model("cart", cartSchema)
module.exports = Cart