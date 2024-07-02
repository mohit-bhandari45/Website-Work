const express = require("express")
const { getCart, addCart,updateCart,deleteCart } = require("../controllers/cart")

const router = express.Router()

router.post("/get-Cart", getCart)
router.post("/add-Cart", addCart)
router.post("/update-Cart", updateCart)
router.post("/delete-Cart", deleteCart)

module.exports = router