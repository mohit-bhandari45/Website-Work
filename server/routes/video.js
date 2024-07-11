const express = require("express")
const {
    videoController,
    videoById
} = require("../controllers/video")

const router = express.Router()

router.get("/get-All", videoController)
router.get("/get-Video/:id", videoById)

module.exports = router