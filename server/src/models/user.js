const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')

const isEmail = validator.isEmail

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 6,
        validate: {
            validator: value => isEmail,
            message: 'Not a valid email address!'
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    }
})

UserSchema.pre('save', function (next) {
    let user = this
    if (user.isModified('password')) {
        bcrypt.genSalt(11, (error, salt) => {
            bcrypt.hash(user.password, salt, (error, hash) => {
                user.password = hash
                next()
            })
        })
    } else {
        next()
    }
})

const User = mongoose.model('User', UserSchema)
module.exports = { User }