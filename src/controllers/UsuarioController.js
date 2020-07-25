const database = require('../database/connection')
const md5 = require('md5')

class UsuarioController{
    novaConta(request,response){
        const {nome,cpf,cep,endereco,numero,cidade,estado,nascimento,bairro,referencia,telefone,celular,email,senha,confirmacaoSenha} = request.body 
        
        database.where({email:email}).table("usuarios").then(data=>{
            if(data){
                response.json({message:"Ja existe um usuario cadastrado com esse email"})
                console.log(data)
            }else{
                database.insert({
                    nome:nome,cpf:cpf,cep:cep,endereco:endereco,numero:numero,
                    cidade:cidade,estado:estado,nascimento:nascimento,bairro:bairro,
                    referencia:referencia,telefone:telefone,celular:celular,email:email,
                    senha:md5(senha),confirmacaoSenha:md5(confirmacaoSenha)}).table("usuarios").then(data=>{
                    console.log(data)
                    response.json({message:"Conta criada com sucesso"})
                }).catch(error=>{
                    console.log(error)
                })
            }
        }).catch(error=>{
            console.log(error)
        })
        
        
    }
}

module.exports = new UsuarioController()