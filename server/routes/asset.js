const express = require("express")
const {
    assetController,
    getLogo,
    heroAssetById,
    getFavIcon
} = require("../controllers/asset")

const router = express.Router()

router.get("/herosecImages", assetController)
router.get("/herosecImages/:id", heroAssetById)
router.get("/logo", getLogo)
router.get("/favicon", getFavIcon)

module.exports = router