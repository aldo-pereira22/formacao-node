const knex = require('../database/connection')
const User = require('./User')


class PasswordToken {
    async create(email) {
        let user = await User.findEmail(email)

        if (user != undefined) {
            let token = Date.now()
            try {
                await knex.insert({
                    user_id: user.idusers,
                    used: 0,
                    token: token
                }).table('passwordTokens')
                
            return { status: true, token:token }



            } catch (error) {
            return { status: false, error: error }
                
            }
        } else {
            return { status: false, error: "O usuário não foi encontrado com esse email!" }
        }
    }
}

module.exports = new PasswordToken()