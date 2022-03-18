const express = require("express")
const app = express()

// Configurando o EJS para usar o HTML
app.set('view engine', 'ejs')

app.get("/",(req, res) => {
    res.render("principal/perfil")
})

app.listen(8080, () => {
    console.log("App Rodando!!!")
})