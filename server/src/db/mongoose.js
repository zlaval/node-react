const mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://192.168.99.100:27017/NodeReact', { useMongoClient: true })

module.exports = { mongoose }