const User = require("../models/user")

/* Creating a new artist */
async function artistControllers(req, res) {
    console.log("Mohit Artist")  
    res.send("Created")
}

module.exports = {
    artistControllers
}