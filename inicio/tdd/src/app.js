const express = require('express')
const app = express()

app.get("/", (req, res) => {
    res.json({ sucecess: true })
})

app.listen(3131, () => {
    console.log("rodando")
})

app.get("/cor/:pessoa", (req, res) => {
    console.log("ALDO")
    let pessoa = req.params.pessoa
    if (pessoa == "aldo") {
        res.json("vermelho")
    }
})