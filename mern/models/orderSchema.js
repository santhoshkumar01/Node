const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema
const { Schema } = mongoose


const productCartSchema = new Schema({
    product: {
        type: ObjectId,
        ref: 'Product'
    },
    name: String,
    count: Number,
    price: Number
})

const productCart = mongoose.model('ProductCart', productCartSchema)


const orderSchema = new Schema({
    products: [productCartSchema],
    transactionId: {},
    amount: Number,
    address: String,
    updated: Date,
    user: {
        type: ObjectId,
        ref: 'User'
    }

}, { timestamps: true })

const order = mongoose.model('Order', orderSchema)

module.exports = { order, productCart }