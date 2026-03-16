function calcularAreaGenerico(label, unidade) {
    let area = this.comprimento * this.altura;
    console.log(`Área de ${label}: ${area} ${unidade}²`);
}

var retangulo1 = {
    comprimento: 10,
    altura: 20,
};

var retangulo2 = {
    comprimento: 30,
    altura: 15,
};

var retangulo3 = {
    comprimento: 5,
    altura: 10,
};

calcularAreaGenerico.call(retangulo1, "retangulo1", "cm");
calcularAreaGenerico.call(retangulo2, "retangulo2", "in");
calcularAreaGenerico.call(retangulo3, "retangulo3", "m");
