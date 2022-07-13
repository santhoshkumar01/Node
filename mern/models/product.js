const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        maxLength: 32
    },
    description: {
        type: String,
        trim: true,
        required: true,
        maxLength: 2000
    },
    price: {
        type: Number,
        trim: true,
        required: true,
        maxLength: 32
    },
    category: {
        type: ObjectId,
        ref: 'Category',
        required: true
    },
    stock: {
        type: Number,
        default: 0,
    },
    photo: {
        data: Buffer,
        contentType: String
    }
},{ timesstamps: true})

module.exports = mongoose.model('Product', productSchema)