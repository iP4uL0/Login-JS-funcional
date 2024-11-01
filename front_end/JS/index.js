

let botao = document.querySelector('#botao');

botao.addEventListener('click', async () => {
    // Captura os valores dos campos de usuário e senha
    let usuario = document.querySelector('#usuario').value
    let senha = document.querySelector('#senha').value

    // Verifica se os campos estão preenchidos
    if (usuario != "" && senha != "") 
    {
        let resposta = await fetch(`http://localhost:3000/login/${usuario}/${senha}`)
        let mensagem = await resposta.json()
        if(mensagem == 'Bem Vindo'){
             alert (mensagem)
            window.location.href ="https://www.youtube.com/watch?v=-NBS6EeNikU"
        }
        else{
            alert(mensagem)
        }
       
    }
    else 
    {
        alert("Cadastro inválido")
        return
    }


})
