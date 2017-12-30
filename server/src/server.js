const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, "../..", "client/dist")))

app.get("/v1/home", (req, resp) => {
    resp.send("hello world")
});

app.get("*", (req, resp) => {
    resp.sendFile(path.join(__dirname, "../..", "/client/dist/index.html"))
})

app.listen(3000, () => {
    console.log("server is up on port 3000")
})
