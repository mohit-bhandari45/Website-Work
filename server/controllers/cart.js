const Cart = require("../models/cart")

/* Get All Cart Items */
async function getCart(req, res) {
    try {
        const email = req.body.email
        const items = await Cart.find({ email: email })
        console.log(items)
        // const itemsDetails = items.map((item) => {
        //     return Product.find({ _id: item._id })
        // })
        // const finalItems = items.map((item) => {

        // })
        return res.status(200).json("egqwrg")
    } catch (error) {
        console.log(error)
    }
}

/* Add Items to Cart */
async function postCart(req, res) {
    try {
        // const { id, email } = req.body
        Cart.create(req.body).then((result) => {
            console.log(result)
        })
        return res.status(201).json({ success: true })
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getCart,
    postCart
}