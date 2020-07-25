
// Função responsável por fazer a criação de uma conta no sistema

function registrarConta(){
    const dados = {
        nome:document.getElementById('nome').value,
        cpf:document.getElementById('cpf').value, //tem que ter 11 digitos e ser válido api
        cep:document.getElementById('cep').value, //tem que ser valido api
        endereco:document.getElementById('logradouro').value, //vai mudar de acordo com cep
        numero:document.getElementById('numero').value, // tem que ser apenas numero
        cidade:document.getElementById('cidade').value, //vai mudar de acordo com cep
        estado:document.getElementById('estado').value, // vai mudar de acordo com cep
        nascimento:document.getElementById('nascimento').value, //
        bairro:document.getElementById('bairro').value,//vai mudar de acordo com cep
        referencia:document.getElementById('complemento').value, // pode ser nulo
        telefone:document.getElementById('telefone').value, // tem que ter digitos definidos
        celular:document.getElementById('celular').value, //tem que ter digitos definidos
        email:document.getElementById('email').value, //tem que ser no formato de email
        senha:document.getElementById('senha').value, // 8 digitos, tem que ter 1 letra maiuscula e um simbolo
        confirmacaoSenha:document.getElementById('confirmacaoSenha').value // tem que ser igual a senha
    }
    const dadosValidos = validarDados()

    if(!dadosValidos){
        alert("Dados inválidos, tente novamente")
    }else{
        const url = "http://localhost:4000/register"

        fetch(url,{
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(dados)
        }).then(response=>{
            console.log(dados)
            alert(response['message'])  
            console.log(response)
        }).catch(error=>{
            console.log(error)
        })
    }

    
}


var cpfValido = false;

function validarCep(){
    const cep = document.getElementById('cep').value
    if (cep !== undefined && cep !== null && cep !== ""){
        const url = "https://viacep.com.br/ws/" + cep + "/json"
        fetch(url).then(response=>{
            response.json().then(data=>{
                if(data['erro']){
                    alert('CEP inválido')
                    cpfValido = false
                }else{
                    console.log('Válido')
                    console.log(data)
                     document.getElementById('bairro').value = data['bairro']
                     document.getElementById('cidade').value = data['localidade']
                     document.getElementById('logradouro').value = data['logradouro']
                     document.getElementById('estado').value = data['uf']
                    cpfValido = true
                }
                //validarDados() //chamar essa funcao quando clicar no botao enviar, se os dados forem todos validos enviar para api
            })
        }).catch(error=>{
            console.log(error)
            cpfValido = false
        })
    }
}
 var quantValidos = 0

 // Se você estiver lendo isso aqui, saiba que eu desenvolvi esse trecho de código dia 24 de junho, sexta feira
 // são exatamente 04:47, segundo dia sem dormir então provavelmente eu não pensei em uma coisa tão robusta, mas está funcionando por enquanto visto o periodo de tempo para ser entregue
function validarDados(){
    const cpf = document.getElementById('cpf').value
    const cep = document.getElementById('cep').value
    const nome = document.getElementById('nome').value
    const email = document.getElementById('email').value
    const senha = document.getElementById('senha').value
    const celular = document.getElementById('celular').value
    const logradouro = document.getElementById('logradouro').value
    const bairro = document.getElementById('bairro').value
    const cidade = document.getElementById('cidade').value
    const estado = document.getElementById('estado').value
    const confirmacaoSenha = document.getElementById('confirmacaoSenha').value
    
    if(email == "" || email.indexOf('@') == -1 ){
        document.getElementById('msgEmail').innerHTML = 'Preencha o campo de E-mail corretamente'
    }
    else{
        quantValidos ++
        document.getElementById('msgEmail').innerHTML = ''
    }
    
    if(cpf == "" || cpf.length < 11){
        document.getElementById('msgCPF').innerHTML = 'Preencha o campo cpf com no minimo 11 caracteres'
        
    }   
    else{
        todosOsDadosValidos = true
        quantValidos ++
        document.getElementById('msgCPF').innerHTML = ''
    }
    if(cep == "" || cep.length < 8){  
        document.getElementById('msgCEP').innerHTML = 'Preencha o campo cep com minimo 11 caracteres'
        
    }else{
        todosOsDadosValidos = true
        quantValidos ++
        document.getElementById('msgCEP').innerHTML = ''
    }
    if (cpfValido){
        quantValidos ++
        document.getElementById('msgCEP').innerHTML = ''
    }else{
        document.getElementById('msgCEP').innerHTML = 'CEP invalido'
    }
    if(senha !== confirmacaoSenha || senha == "" || confirmacaoSenha == "" ){   
        document.getElementById('msgConfirmacaoSenha').innerHTML = 'As senhas não correspondem'
    }else{
        todosOsDadosValidos = true
        quantValidos ++
        document.getElementById('msgConfirmacaoSenha').innerHTML = ''
    }
    if(senha.length < 8){
        document.getElementById('msgSenha').innerHTML = 'A senha não podem ter menos que 8 caracteres'
    }   else{
        todosOsDadosValidos = true
        quantValidos ++
        document.getElementById('msgSenha').innerHTML = ''
    } 
    if(celular.length < 11 || celular == ""){
        document.getElementById('msgCelular').innerHTML = 'Seu numero de telefone deve ter 11 dígitos'
    }   else{
        todosOsDadosValidos = true
        quantValidos ++
        document.getElementById('msgCelular').innerHTML = ''
    } 
    if(logradouro == ""){
        document.getElementById('msgLogradouro').innerHTML = 'Campo não pode ser vazio'
    }   else{
        todosOsDadosValidos = true
        quantValidos ++
        document.getElementById('msgLogradouro').innerHTML = ''
    } 
    if(bairro == ""){
        document.getElementById('msgBairro').innerHTML = 'Campo não pode ser vazio'
    }   else{
        todosOsDadosValidos = true
        quantValidos ++
        document.getElementById('msgBairro').innerHTML = ''
    } 
    if(cidade == ""){
        document.getElementById('msgCidade').innerHTML = 'Campo não pode ser vazio'
    }   else{
        todosOsDadosValidos = true
        quantValidos ++
        document.getElementById('msgCidade').innerHTML = ''
    } 
    if(estado == ""){
        document.getElementById('msgEstado').innerHTML = 'Campo não pode ser vazio'
    }   else{
        todosOsDadosValidos = true
        quantValidos ++
        document.getElementById('msgEstado').innerHTML = ''
    } 
    if(nome == ""){
        document.getElementById('msgNome').innerHTML = 'Campo não pode ser vazio'
    }   else{
        todosOsDadosValidos = true
        quantValidos ++
        document.getElementById('msgNome').innerHTML = ''
    } 

    if(quantValidos == 12){
        quantValidos = 0
        return true
    }else{
        quantValidos = 0
        return false
    }
}
