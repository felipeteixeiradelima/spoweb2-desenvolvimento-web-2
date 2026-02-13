function testarConst() {
    // CONSTANTE global NÃO consegue ser acessada
    // console.log(`Valor de CONSTANTE (escopo local): ${CONSTANTE}`);    // ReferenceError: Cannot access 'CONSTANTE' before initialization

    // Declarando variável local
    const CONSTANTE = "Feijão";
    console.log(`Valor de CONSTANTE após inicialização (escopo local): ${CONSTANTE}`);

    // CONSTANTE local NÃO consegue ser redeclarada
    // const CONSTANTE = "Hambúrguer";     // SyntaxError: Identifier 'CONSTANTE' has already been declared
    
    // CONSTANTE local NÃO pode mudar de valor
    // CONSTANTE = "Hambúrguer";   // TypeError: Assignment to constant variable.
}


testarConst();

// CONSTANTE (local) não pode ser acessada
// console.log(`Valor de CONSTANTE (escopo global): ${CONSTANTE}`);   // ReferenceError: Cannot access 'CONSTANTE' before initialization

// Declarando CONSTANTE global
const CONSTANTE = "Arroz";
console.log(`Valor de CONSTANTE (escopo global): ${CONSTANTE}`);

// NÃO É possível alterar o valor da CONSTANTE global
// CONSTANTE = "Feijão";    // TypeError: Assignment to constant variable.

// NÃO É possível declarar uma constante sem inicializá-la
// const OUTRA_CONSTANTE;   // SyntaxError: Missing initializer in const declaration
