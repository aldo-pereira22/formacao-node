const express = require('express')
const app = express()

app.get("/", (req, res) => {
    res.json({ sucecess: true })
})

app.listen(3131, () => {
    console.log("rodando")
})