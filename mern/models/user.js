var mongoose = require('mongoose')
const crypto = require('crypto')
const { v4: uuidv4 } = require('uuid');

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
userSchema.virtual('password')
    .set(function (password) {
        this._password = password
        this.salt = uuidv4() // 4c4fe73d-3463-4e7f-949a-a38bfb87ad8d
        this.encry_password = this.securePassword(password)
    })
    .get(function () {
        return this._password
    })

userSchema.method = {
    authenticate: function (plainPassword) {
        return this.securePassword(plainPassword) === this.encry_password
    },
    securePassword: function (plainPassword) {
        if (!plainPassword) return ''
        try {
            return crypto.createHmac('sha256', this.salt)
                .update(plainPassword)
                .digest('hex'); //e479029e0fc6169d838a47c9a4456866e0f637b164563945d80d192eb169bd38
        } catch (e) {
            return ""
        }
    }
}

module.exports = mongoose.model('User', userSchema)