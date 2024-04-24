const express = require('express')
const { usersRegister,usersLogin } = require('../controllers/controllers')
const router = express.Router()

router.post("/register",usersRegister)
router.post("/login",usersLogin)

module.exports = router