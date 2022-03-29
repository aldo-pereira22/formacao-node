const User = require('../models/User')
class UserController {


    async findAll(req, res) {
        let users = await User.findAll()
        res.send(users)
    }


    async findById(req, res) {
        let id = req.params.id
        let user = await User.findById(id)

        if (user == undefined) {
            res.status(404)
            res.json({ err: "Não encontrado!" })
            return
        } else {
            // res.status(200)
            res.json(user)
        }

    }
    async create(req, res) {
        let { email, name, password } = req.body

        if (email == undefined || email == "") {
            res.status(400)
            console.log("Não autorizado")
            res.json({ err: "O E-mail é invalido" })
            return
        }


        let emailExists = await User.findEmail(email)
        if (emailExists) {
            res.status(406)
            res.json({ err: "O e-mail ja está cadastrado" })
            return
        }

        await User.new(email, password, name)
        res.status(200)
        console.log("Aprovado")
        res.send("Cadastrado com sucesso!")
    }

    async edit(req, res) {
        let { idusers, name, email, role } = req.body


        let result = await User.update(idusers, email, name, role)
        if (result != undefined) {
            if (result.status) {
                res.status(200)
                res.send("Tudo ok")
            } else {
                res.status(406)
                res.json(result.err)
            }
        } else {
            res.status(406)
            res.json("Ocorreu um erro ao editar")
        }
    }

    async delete(req, res) {
        let id = req.params.id
        let result = await User.delete(id)
        res.status(404)
        res.json(result)

    }

}


module.exports = new UserController()