const User = require("../models/user")

async function usersControllers(req, res) {
    const user = await User.create(req.body)
    if (user) {
        return res.status(201).json(`User Created with Email: ${req.body.email}`)
    }    
}

module.exports = {
    usersControllers
}