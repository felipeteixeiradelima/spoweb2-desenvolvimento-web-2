// Criando objeto literal filme1
var filme1 = {
    titulo: "Homem-Aranha no Aranhaverso",
    retornaTitulo: function () {
        return this.titulo;
    },
};

// Criando filme2
var filme2 = Object.create(filme1, { titulo: { value: "O Poderoso Chefão" } });

// Imprimindo títulos dos filmes
console.log(filme1.retornaTitulo());
console.log(filme2.retornaTitulo());
