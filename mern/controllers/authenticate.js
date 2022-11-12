const User = require('../models/userSchema')
const { validationResult } = require('express-validator')
var jwt = require('jsonwebtoken')
var { expressJwt } = require("express-jwt")

exports.signUp = (req, res) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array()[0].msg })
    }

    const user = new User(req.body)
    user.save((error, user) => {
        if (error) {
            return res.send(400).json({
                error: 'Not Able to Save User to DB!'
            })
        } else {
            return res.send(user)
        }
    })
}

exports.signIn = (req, res) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array()[0].msg })
    }

    const { email, password } = req.body

    User.findOne({ email }, (error, user) => {
        if (error) {
            res.status(400).json({
                message: "User Email Not Found!"
            })
        }

        if (!user.authenticate(password)) {
            return res.status(400).json({
                message: "Passwoed Incorrect!"
            })
        }
        //createToken
        var token = jwt.sign({ _id: user._id }, 'mernStack', { expiresIn: '30d' })
        //Put it in Cookie
        res.cookie('token', token, { expiresIn: new Date() + 9999 })

        //sending response to frontEnd

        const { _id, firstName, lastName, email, role } = user
        return res.json({
            token,
            user: { _id, firstName, lastName, email, role }
        })



    })

}

exports.signOut = (req, res) => {
    res.json({
        status: true,
        message: 'User SignOut'
    })
}
