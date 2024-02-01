export class Passageiro {
    constructor(id, name, cpf, endereco, classe, senha) {
        this.id = id;
        this.name = name;
        this.cpf = cpf;
        this.endereco = endereco;
        this.classe = classe;
        this.senha = senha;
    }
}

export const passagens = [
    new Passageiro(1, 'João', '123.456.789-00', 'Rua 1, 123', '1ª classe', 'roupa'),
    new Passageiro(2, 'Maria', '987.654.321-00', 'Rua 2, 456', '2ª classe', 'nova'),
    new Passageiro(3, 'Maria', '123', 'Rua 2, 456', '2ª classe', '1'),
];
