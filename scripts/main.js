// Banco de dados fake

const usuarios = [
    {
        nomeUsuario: "Gregory",
        email: "email@email.com",
        senha: "123456",
    },
    {
        nomeUsuario: "Luna",
        email: "email1@email.com",
        senha: "123456", 
    },
];

// Dados de Loggin
const campoEmail = document.getElementById("email");
const campoSenha = document.getElementById("senha");

// Botão de entrar
const btnEntrar = document.getElementById("btn-entrar");

// Ouvinte do evento
btnEntrar.addEventListener("click", () => {
    // 1 - capturar os dados dos imputs
    const email = campoEmail.value;
    const senha = campoSenha.value;

    // 2 - checar se o email do usuario existe
    // find: percorre o array até encontrar o elemento procurado
    let usuarioValido = usuarios.find((usuario) => usuario.email === email);
    
    if (usuarioValido !== undefined){
        // 3 - checar se a senha está correta
        if(usuarioValido.senha === senha){
            window.location.pathname = "/app.html";
        }else{
            alert("Senha incorreta!");
        }
    }else{
        alert("Usuario não existe!");
    }

})