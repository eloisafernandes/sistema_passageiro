class Passageiro {
    constructor(id, name, cpf, endereco, classe, senha) {
        this.id = id;
        this.name = name;
        this.cpf = cpf;
        this.endereco = endereco;
        this.classe = classe;
        this.senha = senha;
    }
}

const passagens = [
    new Passageiro(1, 'João', '123.456.789-00', 'Rua 1, 123', '1ª classe', 'roupa'),
    new Passageiro(2, 'Maria', '987.654.321-00', 'Rua 2, 456', '2ª classe', 'nova'),
    new Passageiro(3, 'Maria', '123', 'Rua 2, 456', '2ª classe', '1'),
];

/*function search() {
    clearTable();

    const classe = document.getElementById('classe-field').value;
    const cpf = document.getElementById('cpf-field').value;
    const table = document.getElementById('result-table');


    let filteredPassagens = passagens;

    if (classe !== "Sem filtro") {
        filteredPassagens = filteredPassagens.filter(passagem => passagem.classe === classe);
    }

    if (cpf !== "") {
        filteredPassagens = filteredPassagens.filter(passagem => passagem.cpf === cpf);
    }

    filteredPassagens.forEach(p => {
        const row = table.insertRow();
        row.insertCell(0).textContent = p.id;
        row.insertCell(1).textContent = p.name;
        row.insertCell(2).textContent = p.cpf;
        row.insertCell(3).textContent = p.endereco;
        row.insertCell(4).textContent = p.classe;
    });
}

function clearTable() {
    const table = document.getElementById('result-table');
    while (table.rows.length > 1) {
        table.deleteRow(-1);
    }
}


window.onload = () => {
    const table = document.getElementById('result-table');
    passagens.forEach(passagem => {
        const row = table.insertRow();
        row.insertCell(0).textContent = passagem.id;
        row.insertCell(1).textContent = passagem.name;
        row.insertCell(2).textContent = passagem.cpf;
        row.insertCell(3).textContent = passagem.endereco;
        row.insertCell(4).textContent = passagem.classe;
    });
};*/

function login() {

    const password = document.getElementById('password').value;
    const user = document.getElementById('user').value;
    passagens.forEach(passagem => {
        if(passagem.cpf == user && passagem.senha == password){
            console.log('loguei 1');
            window.location.href = "./home.html";
            console.log('loguei2');
        }
    });
   
}
