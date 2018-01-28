require('./config/config')
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const { mongoose } = require('./db/mongoose')
const usersRouter = require('./routes/users')
const carsRouter = require('./routes/cars')

const app = express()

const API_VERSION = "/v1/"

app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, "../..", "client/dist")))
app.use(`${API_VERSION}users`, usersRouter)
app.use(`${API_VERSION}cars`, carsRouter)

app.get("*", (req, resp) => {
    resp.sendFile(path.join(__dirname, "../..", "/client/dist/index.html"))
})

app.listen(3000, () => {
    console.log("server is up on port 3000")
})

module.exports = { app }
