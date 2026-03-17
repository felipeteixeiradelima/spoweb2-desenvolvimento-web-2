// Definição da classe
class Carro {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
}

// Definindo propriedades
Object.defineProperty(Carro, "marca", {
    get: function () {
        return this.marca;
    },
    set: function (marca) {
        this.marca = marca;
    },
    enumerable: false,
    configurable: true,
});

Object.defineProperty(Carro, "modelo", {
    get: function () {
        return this.modelo;
    },
    set: function (modelo) {
        this.modelo = modelo;
    },
    enumerable: false,
    configurable: true,
});

Object.defineProperty(Carro, "ano", {
    get: function () {
        return this.ano;
    },
    set: function (ano) {
        this.ano = ano;
    },
    enumerable: false,
    configurable: true,
});

var carro1 = new Carro("Fiat", "Uno", 2002);
var carro2 = new Carro("Lamborghini", "Huracán", 2014);

console.log(carro1);
console.log(carro2);
