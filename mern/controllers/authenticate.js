const User = require('../models/userSchema')
exports.signUp = (req, res) => {
    const user = new User(req.body)
    user.save((e, user) => {
        if (e) {
            return res.send(400).json({
                error: 'Not able to Save User to DB!'
            })
        } else {
            return res.send(user)
        }
    })
}

exports.signOut = (req, res) => {
    res.json({
        message: 'User SignOut'
    })
}
