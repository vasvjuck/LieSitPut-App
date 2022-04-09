
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/user.model')
const jwt = require('jsonwebtoken')

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

        const token = jwt.sign({
            password: user.password
        }, 'www123')

        return res.json({ status: 'ok', user: token, role: user.role, username: user.username })
    } else {
        return res.json({ status: 'error', user: false })
    }
})

app.listen(3001, () => {
    console.log('Server started')
})