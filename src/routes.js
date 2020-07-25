const express = require('express')
const router = express.Router()
const UsuarioController = require('../src/controllers/UsuarioController')
router.get('/',(request,response)=>{
    response.sendFile(__dirname + '/views/register.html');  
})

router.get('/style.css',(request, response)=>{
    response.sendFile(__dirname + '/styles/style.css');
}) 

router.get('/register2',(request, response)=>{
    response.sendFile(__dirname + '/views/register2.html');
}) 

router.get('/funcoes/registrarConta.js',(request, response)=>{
    response.sendFile(__dirname + '/funcoes/registrarConta.js');
}) 
router.post('/register',UsuarioController.novaConta)



module.exports = router 