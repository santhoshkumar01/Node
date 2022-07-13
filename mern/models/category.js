const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        maxLength: 32,
        unique: true
    }
}, { timesstamps: true })

modules.exports = mongoose.model('Category', categorySchema)