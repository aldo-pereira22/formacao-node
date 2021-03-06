const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const session = require('express-session')
const connection = require('./database/database')


const categoriesController = require('./categories/CategoriesController')
const articlesController = require('./articles/ArticlesController')
const usersController = require('./users/usersController')

const Article = require('./articles/Article')
const Category = require('./categories/Category')
const User = require('./users/User')


// Definindo a view engine
app.set("view engine", 'ejs')

// Confiração das sessões
app.use(session({
        secret: 'teste',
        cookie: {
            maxAge: 30000
        }
    }))
    // Arquivos estáticos
app.use(express.static('public'))

// Configuração do body-parser
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())

connection
    .authenticate()
    .then(() => {
        console.log("Conexão com o banco de dados feita com sucesso!")
    }).catch((error) => {
        console.log(error)
    })

app.use('/', categoriesController)
app.use('/', articlesController)
app.use('/', usersController)

app.get('/session', (req, res) => {
    req.session.treinamento = "Formação NodeJs"
    req.session.teste = "TESTE DE SESSÃO"

    res.send("Sessão Gerada")


})

app.get('/leitura', (req, res) => {
    res.json({
        treinamento: req.session.treinamento,
        teste: req.session.teste

    })
})

app.get("/", (req, res) => {
    Article.findAll({
        order: [
            ['id', 'DESC']
        ],
        limit: 4
    }).then(articles => {

        Category.findAll().then(categories => {

            res.render("index", { articles: articles, categories: categories })
        })
    })

})

app.get("/:slug", (req, res) => {
    let slug = req.params.slug
    Article.findOne({
        where: {
            slug: slug
        }
    }).then(article => {
        if (article != undefined) {
            Category.findAll().then(categories => {

                res.render("article", { article: article, categories: categories })
            })
        } else {
            res.redirect("/")
        }
    }).catch(err => {
        res.redirect("/")
    })
})

app.get("/category/:slug", (req, res) => {
    let slug = req.params.slug
    Category.findOne({
        where: {
            slug: slug
        },
        include: [{ model: Article }]
    }).then(category => {
        if (category != undefined) {
            Category.findAll().then(categories => {
                res.render("index", { articles: category.articles, categories: categories })
            })
        } else {
            res.redirect("/")
        }
    }).catch(err => {
        res.redirect("/")
    })
})

app.listen(5000, () => {
    console.log("Servidor Rodando na porta: 5000")
})