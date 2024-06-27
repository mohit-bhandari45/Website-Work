const express = require("express")
const { usersControllers } = require("../controllers/user")

const router = express.Router()

router.post("/", usersControllers)

module.exports = router