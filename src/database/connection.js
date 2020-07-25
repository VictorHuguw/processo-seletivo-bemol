var connection = require('knex')({
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      user : 'root',
      password : '123456',
      database : 'processo_seletivo_bemol'
    }
  });

  module.exports = connection