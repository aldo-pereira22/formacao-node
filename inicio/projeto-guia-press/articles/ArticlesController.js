const expres = require('express')
const router = expres.Router()
const Category = require('../categories/Category')
const Article = require('./Article')
const slugfy = require('slugify')

router.get('/admin/articles', (req, res) => {
    res.send("Rota de ARTIGOS")
})

router.get('/admin/articles/new', (req, res) => {
    Category.findAll().then(categories => {

        res.render("admin/articles/new", {categories:categories})
    })
})

router.post('/articles/save', (req, res) => {
    let title = req.body.title
    let body = req.body.body
    let category = req.body.category


    Article.create({
        title:title,
        slug:slugfy(title),
        body:body,
        categoryId: category
    }).then( () => {
        res.redirect('/admin/articles')
    })
})

module.exports = router