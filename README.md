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

## Instalando dependências do projeto 

Dentro da pasta da aplicação execute o comando abaixo para instalar as dependências do projeto

```
npm install
```

## Criados as tabelas do banco de dados

Deixei um script com o código sql para criar o banco de dados utilizado, você deve baixar o script e executar no seu SGBD ou copiar as linhas e executalas para criar o nosso banco de dados e a tabela necessária para a aplicação

O arquivo está localizado na pasta raiz do projeto, arquivo tabela.sql

## Executando o projeto

Agora que temos tudo instalado e configurado, podemos executar o projeto, para isso voce deve executar o seguinte comando aplicacao

```
npm start 
```

Definimos que a nossa aplicação rodará na porta 4000, então basta ir até o seu navegador e digitar na barra de url o endereco

localhost:4000

Para entrar no formulário de cadastro de usuário voce deve clicar em "Criar conta" logo abaixo do botão de fazer login.
