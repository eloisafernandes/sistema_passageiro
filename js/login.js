
import {Passageiro, passagens} from  './data.mjs';

function login() {
    const password = document.getElementById('password').value;
    const user = document.getElementById('user').value;
    passagens.forEach(passagem => {
        if(passagem.cpf == user && passagem.senha == password){
            console.log('loguei 1');
            window.location.href = "./home.html";
            console.log('loguei2');
        }
        else{
            document.getElementById('error-login').innerHTML = "Dados inválidos";

        }
    });
   
}

function validarCPF(cpf) {
    cpf = cpf.replace(/\D/g, '');

    if (cpf.length !== 11) {
        return false;
    }
    if (/^(\d)\1{10}$/.test(cpf)) {
        return false;
    }
    let soma = 0;
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let resto = (soma * 10) % 11;
    let digito1 = (resto === 10 || resto === 11) ? 0 : resto;

    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = (soma * 10) % 11;
    let digito2 = (resto === 10 || resto === 11) ? 0 : resto;
    return (parseInt(cpf.charAt(9)) === digito1 && parseInt(cpf.charAt(10)) === digito2);
}

function register(){
    document.getElementById('error-cpf').innerHTML = '';
    document.getElementById('error-password').innerHTML = '';
    document.getElementById('error-name').innerHTML = '';
    document.getElementById('error-address').innerHTML = '';
    document.getElementById('error-class').innerHTML = '';

    const password = document.getElementById('password').value;
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const cpf = document.getElementById('cpf').value;
    const class_ = document.getElementById('class').value;

    var regist = false;
    if(cpf == '' || password == '' || name == '' || address == '' || class_ === ''){
        if(!validarCPF(cpf)){
            document.getElementById('error-cpf').innerHTML = "CPF inválido";
        }
        if (cpf == ''){
            document.getElementById('error-cpf').innerHTML = "CPF vazio";
        }
        if (password == '')    {
            document.getElementById('error-password').innerHTML = "A senha está vazia.";
        }
        if (name == ''){
            document.getElementById('error-name').innerHTML = "O nome precisa estar preenchido";
        }
        if (address == '')    {
            document.getElementById('error-address').innerHTML = "Este campo precisar ser preenchido";
        }
        if (class_ === "")    {
            document.getElementById('error-class').innerHTML = "Por favor, selecione uma classe";
        }
    }
    else{
        if(validarCPF(cpf)){
            var p = new Passageiro(passagens.length+1, name, cpf, address, class_, password);
            if (!passagens.some(passagem => passagem.cpf === p.cpf)) {
                passagens.push(p);
                console.log('Novo Passageiro adicionado:', p);
                window.location.href = "./login.html";
            } else {
                document.getElementById('error-cpf').innerHTML = "CPF já cadastrado";
                
            }
        }
        else{
            document.getElementById('error-cpf').innerHTML = "CPF inválido";

        }
    }
}