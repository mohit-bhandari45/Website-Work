const Cart = require("../models/cart")

async function getCart(req, res) {
    const email = req.body.email
    const items = await Cart.find({ email: email })
    console.log(items)
    // const itemsDetails = items.map((item) => {
    //     return Product.find({ _id: item._id })
    // })
    // const finalItems = items.map((item) => {

    // })
    return res.status(200).json("egqwrg")
}

async function postCart(req, res) {
    // const { id, email } = req.body
    Cart.create(req.body).then((result) => {
        console.log(result)
    })
    return res.json({ success: true })
}

module.exports = {
    getCart,
    postCart
}