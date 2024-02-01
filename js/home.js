

function login() {

    const password = document.getElementById('password').value;
    const user = document.getElementById('user').value;
    passagens.forEach(passagem => {
        if (passagem.cpf == user && passagem.senha == password) {
            window.location.href = "./home.html";
        }
    });

}
