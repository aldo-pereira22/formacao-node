const express = require("express")
const router = express.Router();
const HomeController = require("../controllers/HomeController");
const UserController = require('../controllers/UserController')



router.get('/', HomeController.index);
router.post('/user', UserController.create)
router.get('/user',UserController.findAll )
router.get('/user/:id',UserController.findById)
router.put('/user', UserController.edit)
router.delete('/user/:id', UserController.delete)
router.post('/recoverpassword', UserController.recoverPassword)




module.exports = router;