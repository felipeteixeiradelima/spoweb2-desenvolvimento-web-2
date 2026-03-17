// Definindo classe Intercambio
class Intercambio {}

// Definindo protótipo
Intercambio.prototype = {
    constructor: function (pais) {
        this.pais = pais;
    },
    retornaPais: function () {
        return this.pais;
    },
    definePais: function (pais) {
        this.pais = pais;
    },
};

// Criando objetos
var intercambio1 = new Intercambio("Brasil");
var intercambio2 = new Intercambio("Espanha");

// Testando métodos do protótipo
console.log(intercambio1.retornaPais()); // "Brasil"
console.log(intercambio2.retornaPais()); // "Espanha"

intercambio2.definePais("Portugal");
console.log(intercambio2.retornaPais()); // "Portugal"
