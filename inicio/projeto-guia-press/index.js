const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const connection = require('./database/database')



// Definindo a view engine
app.set("view engine",'ejs')

// Arquivos estáticos
app.use(express.static('public'))

// Configuração do body-parser
app.use(bodyParser.urlencoded({
    extended:false
}))
connection
    .authenticate()
    .then( () => {
        console.log("Conexão com o banco de dados feita com sucesso!")
    }).catch((error) => {
        console.log(error)
    })

app.use(bodyParser.json())


app.get("/", (req, res) => {
    res.render("index")
})


app.listen(5000,() => {
    console.log("Servidor Rodando na porta: 5000")
})