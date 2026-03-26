// Definindo classe Intercambio
function Intercambio(pais) {
    this.pais = pais;
}

// Definindo protótipo
Intercambio.prototype = {
    constructor: Intercambio,

    retornaPais: function () {
        return this.pais;
    },

    definePais: function (novoPais) {
        this.pais = novoPais;
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
