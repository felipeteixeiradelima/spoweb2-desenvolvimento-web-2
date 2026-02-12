function testarConst() {
    // variavel global NÃO consegue ser acessada
    // console.log(`Valor de variavel (escopo local): ${variavel}`);    // ReferenceError: Cannot access 'variavel' before initialization

    // Declarando variável local
    let variavel = "Feijão";
    console.log(`Valor de variavel após inicialização (escopo local): ${variavel}`);

    // variavel local NÃO consegue ser redeclarada
    // let variavel = "Hambúrguer";     // SyntaxError: Identifier 'variavel' has already been declared
}


testarConst();

// variavel (local) não pode ser acessada
// console.log(`Valor de variavel (escopo global): ${variavel}`);   // ReferenceError: Cannot access 'variavel' before initialization

// Declarando variável global
let variavel = "Arroz";
console.log(`Valor de variavel (escopo global): ${variavel}`);

// É possível alterar o valor da variável global
variavel = "Feijão";
console.log(`Valor de variavel após mudança (escopo global): ${variavel}`);
