


function search() {
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
};


