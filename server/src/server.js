const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const { mongoose } = require('./db/mongoose')
const usersRouter = require('./routes/users')

const app = express()

const API_VERSION = "/v1/"

app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, "../..", "client/dist")))
app.use(`${API_VERSION}users`, usersRouter)


app.get(`${API_VERSION}home`, (req, resp) => {
    resp.send("hello world")
});

app.get("*", (req, resp) => {
    resp.sendFile(path.join(__dirname, "../..", "/client/dist/index.html"))
})

app.listen(3000, () => {
    console.log("server is up on port 3000")
})

module.exports = { app }
