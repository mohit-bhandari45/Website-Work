const express = require("express")
const { getCart,postCart } = require("../controllers/cart")

const router = express.Router()

router.post("/get-cart", getCart)
router.post("/post-cart", postCart)

module.exports = router