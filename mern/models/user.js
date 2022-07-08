var mongoose = require('mongoose')
const crypto = require('crypto')

var userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxLength: 32,
        trim: true
    },
    lastname: {
        type: String,
        naxLength: 32,
        trim: true
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    userinfo: {
        type: String,
        trim: true
    },
    encry_password: {
        type: String,
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

userSchema.method = {
    securePassword: function (plainPassword) {
        if (!plainPassword) return ''
        try {
            return createHmac('sha256', this.salt)
                .update(plainPassword)
                .digest('hex');
        } catch (e) {
            return ""
        }
    }
}

module.exports = mongoose.model('User', userSchema)