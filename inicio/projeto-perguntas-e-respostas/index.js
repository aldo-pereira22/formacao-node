const express = require("express")
const app = express()

// Configurando o EJS para usar o HTML
app.set('view engine', 'ejs')

app.get("/:nome/:lang",(req, res) => {

    let nome =req.params.nome
    let lang = req.params.lang
    let exibirMsg = true

    res.render("index", {
        nome:nome,
        lang:lang,
        empresa:"Empresa do Aldo",
        inscritos: 8000,
        msg:exibirMsg
    })
})

app.listen(8080, () => {
    console.log("App Rodando!!!")
})