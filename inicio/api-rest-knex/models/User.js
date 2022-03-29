const knex = require('../database/connection')
const bcrypt = require('bcrypt')


class User {

    async findAll() {

        try {
            let result = await knex.select(["idusers", "email", "name", "role"]).table("users");

            if (result.length > 0) {
                return result
            } else {
                return undefined
            }


        } catch (error) {
            console.log(error)
            return undefined
        }
    }

    async findById(id) {
        try {
            let result = await knex.select(["idusers", "email", "name", "role"]).where({ idusers: id }).table("users");
            return result
        } catch (error) {
            console.log(error)
            return []
        }
    }
    async new(email, password, name) {

        try {
            const hash = await bcrypt.hash(password, 10)
            await knex.insert({ email, password: hash, name, role: 0 }).table('users')
        } catch (error) {
            console.log(error)
        }
    }


    async findEmail(email) {
        try {

            let result = await knex.select("*").from('users').where({ email: email })
            if (result.length > 0) {
                return true
            } else {
                return false
            }


        } catch (error) {
            console.log(error)
            return false

        }
    }

    async update(id, email, name, role) {
        let user = await this.findById(id)

        if (user.length > 0) { // se tiver usuário com esse ID
            let editUser = {}
            if (email != undefined) {
                if (email != user.email) {
                    let result = await this.findEmail(email)
                    if (result == false) {
                        editUser.email = email
                    } else {

                        return { error: "O usuário não existe!" }
                    }
                }
            }
            if (name != undefined) {
                editUser.name = name
            }

            if (role != undefined) {
                editUser.role = role
            }

            try {

                await knex.update(editUser).where({ idusers: id }).table("users")
                return { status: true }


            } catch (error) {
                return { status: false, err: error }

            }

        } else {
            return {
                status: false,
                error: "O usuário não existe!"
            }
        }
    }

    async delete(idusers) {
        let user = await this.findById(idusers)



        if (user.length > 0) {
            try {
                await knex.delete().where({ idusers }).table('users')
                return { msg: "Usuário excluido com sucesso!" }
            } catch (error) {
                console.log(error)
                return error
            }
        } else {
            return { msg: "Usuário não encontrado" }
        }

    }
}

module.exports = new User()