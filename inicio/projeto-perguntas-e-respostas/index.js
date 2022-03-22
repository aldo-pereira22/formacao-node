const express = require("express")
const app = express()
const bodyparser = require('body-parser')
const connection = require('./database/database')
const Pergunta = require('./database/Pergunta')
const Resposta = require('./database/Resposta')

// Database
connection.authenticate()
.then(() => {
    console.log("Conexão feita com o banco de dados")
}).catch((err) => {
    console.log(err)
})

// Configurando o EJS para usar o HTML
app.set('view engine', 'ejs')
app.use(express.static('public'))

// Configuração do bodyParser
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

app.get("/",(req, res) => {
    Pergunta.findAll({raw:true, order:[
        ['titulo','ASC']
    ]}).then(perguntas => {
        console.log(perguntas)
        res.render("index",{
            perguntas: perguntas
        })
    })
})

app.get("/perguntar", (req, res) => {
    res.render("perguntar")
})
app.post("/salvarpergunta", (req, res) => {
    var titulo = req.body.titulo
    var descricao = req.body.descricao

    Pergunta.create({
        titulo: titulo,
        descricao: descricao
    }).then(() => {
        res.redirect('/')
    })
})

app.get('/pergunta/:id',(req, res) => {
    let id = req.params.id
    Pergunta.findOne({
        where:{id:id}
    }).then( pergunta => {
        if(pergunta != undefined){
            res.render('pergunta',{
                pergunta: pergunta
            })
        }else {
            res.redirect('/')
        }
    })
})
app.listen(8080, () => {
    console.log("App Rodando!!!")
})