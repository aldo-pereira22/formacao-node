const bodyParser = require('body-parser')
const express = require('express')
const flash = require('express-flash')
const app = express()
const session = require('express-session')
const cookieParser = require('cookie-parser')

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
app.use(flash())
app.use(cookieParser("123"))

app.use(session({
    secret: 'keyboardcat',
    resave: false,
    saveUninitialized: true,

    cookie: { maxAge: 60000 }
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

    if (nome == undefined || nome == '') {

        nomeError = " O nome não pode ser vazio"
    }

    if (nome.length < 4) {
        nomeError = "O nome é muito pequeno"
    }
    if (emailError != undefined || pontosError != undefined || nomeError != undefined) {
        req.flash("emailError", emailError)
        req.flash("pontosErro", pontosError)
        req.flash("nomeError", nomeError)
        emailError = (emailError == undefined || emailError.length == 0) ? undefined : emailError
        pontosError = (pontosError == undefined || pontosError.length == 0) ? undefined : pontosError
        nomeError = (nomeError == undefined || nomeError.length == 0) ? undefined : nomeError


        res.render("index", { emailError, pontosError, nomeError })
    } else {
        res.send("SHOW DE BOLA")
    }

})
app.get('/', (req, res) => {
    let emailError = req.flash('emailError')
    let pontosError = req.flash('pontosError')
    let nomeError = req.flash('nomeError')
    let email = req.flash('email')
    emailError = (emailError == undefined || emailError.length == 0) ? undefined : emailError
    email = (email == undefined || email.length == 0) ? "" : email

    res.render("index", { emailError, pontosError, nomeError, email: email })
})

app.listen(5000, (req, res) => {
    console.log("Rodando")
})