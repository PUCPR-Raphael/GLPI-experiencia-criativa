function cadastro() {
    if (document.getElementById("nome").value == "" ||
        document.getElementById("setor").value == "" ||
        document.getElementById("senha").value == "" ||
        document.getElementById("senha_confirma").value == "" ||
        document.getElementById("email").value == "") {
        document.getElementById("mensagem_erro").style.color = "rgb(206, 48, 48)"
        document.getElementById("mensagem_erro").style.backgroundColor = "lightcoral"
        document.getElementById("mensagem_erro").innerHTML = "Algum dos campos está vazio, por favor, preencha-os"
    } else if (document.getElementById("senha").value != document.getElementById("senha_confirma").value) {
        document.getElementById("senha").style.color = "rgb(206, 48, 48)"
        document.getElementById("senha_confirma").style.color = "rgb(206, 48, 48)"
        document.getElementById("mensagem_erro").style.color = "rgb(206, 48, 48)"
        document.getElementById("mensagem_erro").style.backgroundColor = "lightcoral"
        document.getElementById("mensagem_erro").innerHTML = "As senhas não coincidem"
    } else {
        auxDadosCadastro = []
        document.getElementById("mensagem_erro").style.color = "green"
        document.getElementById("mensagem_erro").style.backgroundColor = "lightgreen"
        document.getElementById("mensagem_erro").innerHTML = "Cadastro Realizado!"
    }
}