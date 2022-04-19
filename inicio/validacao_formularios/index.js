const bodyParser = require('body-parser')
const express = require('express')
const flash = require('express-flash')
const app = express()
const session = require('express-session')
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
app.use(flash())

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}))


app.post('/form', (req, res) => {
    const { email, nome, pontos } = req.body

    let emailError
    let pontosError
    let nomeError

    if (email == undefined || email == '') {
        emailError = "O email não pode ser vazio"
    }

    if (pontos == undefined || pontos < 20) {
        pontosError = "Vc não pode ter menos de 20 pontos"
    }

    if (nome == undefined || '') {

        nomeError = " O nome não pode ser vazio"
    }

    if (emailError != undefined || pontosError != undefined || nomeError != undefined) {
        res.send("ERRO NO FORMULÁRIO")
    } else {
        res.send("SHOW DE BOLA")
    }

})
app.get('/', (req, res) => {
    res.render("index")
})

app.listen(5000, (req, res) => {
    console.log("Rodando")
})