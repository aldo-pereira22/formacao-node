const express = require("express")
const app = express();
const router = express.Router();
const HomeController = require("../controllers/HomeController");
const UserController = require('../controllers/UserController')


router.get('/', HomeController.index);
router.post('/user', UserController.create)
router.get('/user',UserController.findAll )
router.get('/user/:id',UserController.findById)


module.exports = router;