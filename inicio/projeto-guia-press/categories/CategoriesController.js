const expres = require('express')
const router = expres.Router()

router.get('/categories', (req, res) => {
    res.send("Rota de categorias")
})

router.get('/categories/admin/new', (req, res) => {
    res.send("ROTA DE ADMIN")
})

module.exports = router