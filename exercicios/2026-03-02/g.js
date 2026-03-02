// Expressão literal x não literal

// Regex de email
// Autor: Steve Peralta R. (https://www.linkedin.com/in/peralta-steve-atileon/)

// Literal
var regexpLiteral = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm;

// Não Literal
var regexpNaoLiteral = new RegExp(
    "^((?!\\.)[\\w\\-_.]*[^.])(@\\w+)(\\.\\w+(\\.\\w+)?[^.\\W])$"
);

// Testando email
const EMAIL = "email@exemplo.com";

console.log(regexpLiteral.test(EMAIL));
console.log(regexpNaoLiteral.test(EMAIL));
