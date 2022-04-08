var knex = require('knex')({
    client: 'mysql2',
    connection: {
        host: '172.17.0.4',
        user: 'root',
        password: 'root',
        database: 'apiusers'
    }
});


module.exports = knex