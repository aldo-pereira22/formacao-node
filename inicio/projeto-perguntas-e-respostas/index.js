const express = require("express")
const app = express()

// Configurando o EJS para usar o HTML
app.set('view engine', 'ejs')

app.get("/:nome/:lang",(req, res) => {

    let nome =req.params.nome
    let lang = req.params.lang
    let exibirMsg = true
    

    var produtos = [
        {nome: "Doritos", preco:4.99},
        {nome: "Coca Cola", preco:8.99},
        {nome: "Leite de Cabra", preco:20.09},
        {nome: "Contra Filé", preco:38.99},
        {nome: "Coxão Mole", preco:42.99},
        {nome: "RedBull", preco:42.99},


    ]

    res.render("index", {
        nome:nome,
        lang:lang,
        empresa:"Empresa do Aldo",
        inscritos: 8000,
        msg:exibirMsg,
        produtos: produtos

    })
})

app.listen(8080, () => {
    console.log("App Rodando!!!")
})