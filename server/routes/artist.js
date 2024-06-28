const express = require("express")
const { artistControllers } = require("../controllers/artist")

const router = express.Router()

router.get("/", artistControllers)

module.exports = router