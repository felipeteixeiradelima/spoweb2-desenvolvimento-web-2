var pessoa = {
    _nome: "",
    get nome() {
        if (this._nome.length === 0) {
            return null;
        }
        return this._nome;
    },
    set nome(novoNome) {
        if (
            (novoNome === null) |
            (novoNome === undefined) |
            (novoNome.length === 0)
        ) {
            return;
        }
        this._nome = novoNome;
    },
};

console.log(pessoa.nome); // null

pessoa.nome = "Thiago";
console.log(pessoa.nome); // Thiago

pessoa.nome = "";
console.log(pessoa.nome); // Thiago
