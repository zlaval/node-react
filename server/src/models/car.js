const mongoose = require('mongoose')

const CarSchema = new mongoose.Schema({
    brand: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    age: {
        type: Number
    }
})

const Car = mongoose.model('Car', CarSchema)
module.exports = { Car }
