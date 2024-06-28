const express = require("express")
const { getAllProducts,getProductById,getProductBySales,getComingSoonProducts,getRecentProducts } = require("../controllers/product")

const router = express.Router()

router.get("/get-All", getAllProducts)
router.get("/get/:id", getProductById)
router.get("/get-Sales", getProductBySales)
router.get("/get-Soon", getComingSoonProducts)
router.get("/get-Recent", getRecentProducts)

module.exports = router