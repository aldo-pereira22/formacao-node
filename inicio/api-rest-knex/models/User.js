const knex = require('../database/connection')
const bcrypt = require('bcrypt')


class User {

    async findAll(){

        try {
            let result = await knex.select(["idusers", "email","name", "role"]).table("users");
            
            if(result > 0){
                return result[0]
            }else {
                return undefined
            }


        } catch (error) {
            console.log(error)
            return undefined
        }
    }

    async findById(id){
        try {
            let result = await knex.select(["idusers", "email","name", "role"]).where({idusers:id}).table("users");
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
}

module.exports = new User()