const mongoose = require('mongoose')

const Goods = new mongoose.Schema(
    {
        id: { type: Number, required: true, unique: true },
        itemId: { type: String, required: true },
        imgSrc: { type: String, required: true },
        name: { type: String, required: true },
        ratings: { type: String, required: true },
        price: { type: Number, required: true }
    },
    { collection: 'goods-data' }
)

const model = mongoose.model('GoodsData', Goods)

module.exports = model