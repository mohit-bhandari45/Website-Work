const express = require("express")
const {
    getCart,
    addCart,
    updateCart,
    deleteCart
} = require("../controllers/cart");

const { auth } = require("../middlewares/middleware");

const router = express.Router()

/* Authentication Middleware */
router.use(auth());

router.get("/get-Cart", getCart)
router.post("/add-Cart", addCart)
router.post("/update-Cart", updateCart)
router.post("/delete-Cart", deleteCart)

module.exports = router