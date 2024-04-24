const usersRegister = (req, res) => {
    console.log(req.body)
    res.json({register:true})
}

const usersLogin = (req, res) => {
    console.log(req.body)
    res.json({login:true})
}

module.exports = {
    usersRegister, usersLogin
}