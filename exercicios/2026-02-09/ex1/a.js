// Declarando variável global
var variavel = "Arroz";

function testarVariaveis() {
    // variavel global consegue ser acessada (undefined)
    console.log(`Valor de variavel (escopo local): ${variavel}`);

    // variavel global consegue ser redeclarada
    var variavel = "Feijão";
    console.log(`Valor de variavel após inicialização (escopo local): ${variavel}`);    // "Feijão"

    // Declarando variável local
    var variavelLocal = "Hambúrguer";
    console.log(`Valor de variavelLocal (escopo local): ${variavelLocal}`);    // "Hambúrguer"
}

testarVariaveis();
console.log(`Valor de variavel (escopo global): ${variavel}`);

// É possível alterar o valor da variável global
variavel = "Feijão";
console.log(`Valor de variavel após mudança (escopo global): ${variavel}`);

// variavelLocal não pode ser acessada
// console.log(`Valor de variavelLocal (escopo global): ${variavelLocal}`);    // ReferenceError: variavelLocal is not defined
