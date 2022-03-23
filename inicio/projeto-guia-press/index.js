const bodyParser = require('body-parser')
const express = require('express')
const app = express()



// Definindo a view engine
app.set("view engine",'ejs')

// Configuração do body-parser
app.use(bodyParser.urlencoded({
    extends:false
}))
app.use(bodyParser.json())


app.get("/", (req, res) => {
    res.render("index")
})


app.listen(5000,() => {
    console.log("Servidor Rodando na porta: 5000")
})