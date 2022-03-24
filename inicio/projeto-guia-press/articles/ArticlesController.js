const expres = require('express')
const router = expres.Router()

router.get('/articles', (req, res) => {
    res.send("Rota de ARTIGOS")
})

router.get('/articles/admin/new', (req, res) => {
    res.send("ROTA DE NOVO ARTIGO!")
})

module.exports = router