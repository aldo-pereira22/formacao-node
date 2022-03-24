const expres = require('express')
const router = expres.Router()

router.get("/admin/categories/new", (req, res) => {
        res.render('admin/categories/new')
})
module.exports = router