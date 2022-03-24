const expres = require('express')
const router = expres.Router()

router.get('/articles', (req, res) => {
    res.send("Rota de ARTIGOS")
})

router.get('/admin/articles/new', (req, res) => {
    res.render("admin/articles/new")
})

module.exports = router