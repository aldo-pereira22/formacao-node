var knex = require('knex')({
    client: 'mysql2',
    connection: {
      host : '172.17.0.2',
      user : 'root',
      password : 'root',
      database : 'apiusers'
    }
  });


module.exports = knex