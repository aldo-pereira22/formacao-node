const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const connection = require('./database/database')


const categoriesController = require('./categories/CategoriesController')
const articlesController = require('./articles/ArticlesController')
const Article = require('./articles/Article')
const Category = require('./categories/Category')


// Definindo a view engine
app.set("view engine",'ejs')

// Arquivos estáticos
app.use(express.static('public'))

// Configuração do body-parser
app.use(bodyParser.urlencoded({
    extended:false
}))
app.use(bodyParser.json())

connection
    .authenticate()
    .then( () => {
        console.log("Conexão com o banco de dados feita com sucesso!")
    }).catch((error) => {
        console.log(error)
    })

app.use('/', categoriesController)
app.use('/', articlesController)    



app.get("/", (req, res) => {
    Article.findAll().then( articles => {
        res.render("index", {articles:articles})
    })

})

app.get("/:slug", (req, res) => {
    let slug = req.params.slug
    Article.findOne({
        where: {
            slug: slug
        }
    }).then( article => {
        if(article != undefined){
            res.render("article", {article : article});
        }else {
            res.redirect("/")
        }
    }).catch( err => {
        res.redirect("/")
    })
})

app.listen(5000,() => {
    console.log("Servidor Rodando na porta: 5000")
})