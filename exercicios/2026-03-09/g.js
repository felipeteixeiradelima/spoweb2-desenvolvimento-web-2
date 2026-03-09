var retangulo = {
    comprimento: 15,
    altura: 25,
    area: function () {
        return this.comprimento * this.altura;
    },
};

// Enumeração de propriedades usando for-in
for (var propriedade in retangulo) {
    console.log("Nome da propriedade:", propriedade);
    console.log("Valor da propriedade:", retangulo[propriedade]);
}

// Enumeração de propriedades usando Object.keys()
var propriedades = Object.keys(retangulo);

for (var i = 0; i < propriedades.length; i++) {
    console.log("Nome da propriedade:", propriedades[i]);
    console.log("Valor da propriedade:", retangulo[propriedades[i]]);
}
