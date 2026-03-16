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

var calculaAreaRetangulo1 = calcularAreaGenerico.bind(retangulo1);
calculaAreaRetangulo1("retangulo1", "cm");

var calculaAreaRetangulo2 = calcularAreaGenerico.bind(retangulo2, "retangulo2");
calculaAreaRetangulo2("m");

var calculaAreaRetangulo3 = calcularAreaGenerico.bind(retangulo3, "retangulo3", "m");
calculaAreaRetangulo3();
