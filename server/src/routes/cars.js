const express = require('express')
const _ = require('lodash')
const { Car } = require('../models/car')
const { authenticate } = require('../middleware/authenticate')

const carsRouter = express.Router()

carsRouter.get('/', authenticate, async (req, res) => {
    try {
        const cars = await Car.find()
        res.send({ cars })
    } catch (e) {
        res.status(400).send(e)
    }
})

carsRouter.post('/', authenticate, async (req, res) => {
    try {
        const body = _.pick(req.body, ['brand', 'age'])
        const car = new Car(body)
        await car.save()
        res.send(car)
    } catch (e) {
        res.status(400).send(e)
    }
})

module.exports = carsRouter
