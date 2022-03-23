const Sequelize = require('sequelize')


const connection = new Sequelize('guiapress','root','root',{
    host:'172.17.0.4',
    dialect:'mysql'
})

module.exports = connection