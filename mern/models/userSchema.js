const mongoose = require('mongoose')
const { Schema } = mongoose
const crypto = require('crypto')
import { v4 as uuidv4 } from 'uuid'

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        maxLength: 32,
        trim: true
    },
    lastName: {
        type: String,
        maxLength: 32,
        trim: true
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        required: true
    },
    userInfo: {
        type: String,
        trim: true
    },
    //COME BACK
    encryptedPassword: {
        type: true,
        required: true
    },
    salt: String,
    role: {
        type: Number,
        default: 0
    },
    purchases: {
        type: Array,
        default: []
    }
})

//plainPassword+salt=hash

userSchema.virtual('password')
    .set(function (password) {
        this._password = password //plainPassword
        this.salt = uuidv4()
        this.encryptedPassword = securePassword(password)
    })
    .get(function () {
        return this._password
    })

userSchema.method = {
    securePassword: function (plainPassword) {
        if (!plainPassword) { return }
        try {

            return crypto.createHmac('sha256', this.salt)
                .update(plainPassword)
                .digest('hex')
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = mongoose.model('User', userSchema)