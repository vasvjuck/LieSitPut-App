const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/user.model')
const Goods = require('./models/goods.model')

app.use(cors())

app.use(express.json())

mongoose.connect('mongodb://localhost:27017/moonshiner-task')

app.post('/api/register', async (req, res) => {
    console.log(req.body)
    try {
        await User.create({
            username: req.body.username,
            password: req.body.password,
            role: req.body.role
        })
        res.json({ status: 'ok' })
    } catch (error) {
        console.log(error)
        res.json({ status: 'error', error: 'Username already exist' })
    }
})

app.post('/api/login', async (req, res) => {

    const user = await User.findOne({
        username: req.body.username,
    })

    if (user) {
        return res.json({ status: 'ok', role: user.role, username: user.username, password: user.password })
    } else {
        return res.json({ status: 'error', user: false })
    }
})

app.post('/api/oneGoods', async (req, res) => {

    const oneGoods = await Goods.findOne({ id: req.body.id })

    if (oneGoods) {
        return res.json(oneGoods)
    } else {
        return res.json({ status: 'error', user: false })
    }
})

app.put('/api/edit', async (req, res) => {
    try {
        const edit = await Goods.updateOne({ id: req.body.id }, {
            $set: {
                name: req.body.name,
                ratings: req.body.ratings,
                price: req.body.price
            }
        })
        return res.json({ status: 'ok', edit: true })
    } catch (error) {
        return res.json({ status: 'error', user: false })
    }
})

app.get('/api/allGoods', async (req, res) => {
    try {
        const goods = await Goods.find()
        return res.json(goods)
    } catch (error) {
        return res.json({ status: 'error', user: false })
    }
})

app.delete('/api/delete', async (req, res) => {
    try {
        const oneGoods = await Goods.findOne({ id: req.body.id })
        await oneGoods.remove()

        return res.json({ status: 'ok' })
    } catch (error) {
        return res.json({ status: 'error' })
    }
})

app.listen(3001, () => {
    console.log('Server started')
})