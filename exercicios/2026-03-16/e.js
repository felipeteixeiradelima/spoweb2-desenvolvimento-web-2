// Adicionando defineLetraInicialMaiuscula() à String.prototype

String.prototype.defineLetraInicialMaiuscula = function () {
    const primeiraLetra = this.charAt(0);
    const restoDaString = this.substring(1);

    const stringModificada = primeiraLetra.toUpperCase() + restoDaString;

    return stringModificada;
};

var string1 = "minha string!";

string1Modificada = string1.defineLetraInicialMaiuscula();
console.log(string1Modificada);
