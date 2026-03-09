// Testando acesso a atributo de objetos com colchetes

quadrado = {
    nome: "Meu Quadrado",
    cor: "azul",
    altura: 15,
    largura: 25,
    area: function () {
        return this.altura * this.largura;
    },
};

// Acessando atributo
console.log("Nome: ", quadrado["nome"]);

// Acessando função
console.log("Área: ", quadrado["area"]());
