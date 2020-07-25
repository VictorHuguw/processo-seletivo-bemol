# Processo-seletivo-bemol
Projeto do processo seletivo para a vaga de engenheiro de software

## Stack escolhida

 - Backend : Nodejs
 - Frontend : Html, Css, Bootstrap , Javascript 
 
## Requisitos para rodar a aplicação

1. NodeJs instalado

2. Mysql instalado e configurado

## Configurando seu banco de dados na aplicação

Se você já estiver com o mysql instalado no seu computador provavelmente tem suas próprias configurações de usuário, senha etc ...
Você deve adicionar suas configurações de banco de dados nas variaveis que se encontram no arquivo localizado em src/database/connection.js, o nome do banco não precisa alterar pois utilizaremos um banco de dados com esse nome

```
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

```

