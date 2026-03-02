// Função literal x não literal

// Literal
function isOddLiteral(num) {
    return num % 2 !== 0;
}

// Não Literal
var isOddNaoLiteral = new Function("num", "return num % 2 !== 0");

// Imprimindo resultado das funções
console.log(isOddLiteral(11));
console.log(isOddNaoLiteral(11));
