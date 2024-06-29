const express = require("express")
const { getAllProducts, getProductById, getProductBySales, getComingSoonProducts, getRecentProducts, addProducts,getRecentProductsById } = require("../controllers/product")

const router = express.Router()

router.get("/get-All", getAllProducts)
router.get("/get/:id", getProductById)
router.get("/get-Sales", getProductBySales)
router.get("/get-Soon", getComingSoonProducts)
router.get("/get-Recent", getRecentProducts)
router.get("/get-Recent/:id", getRecentProductsById)
router.post("/add-Product", addProducts)

module.exports = router