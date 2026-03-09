// Implementando 10 métodos de string

var minhaString = "Tudo vale a pena quando a alma não é pequena.";

console.log(minhaString.charAt(10)); // Retorna char na posição 10 ('a')
console.log(minhaString.concat(" - Fernando Pessoa")); // Retorna string concatenada com outra string
console.log(minhaString.startsWith("T")); // Retorna se a string começa com 'T' (true)
console.log(minhaString.endsWith("?")); // Retorna se a string termina com '?' (false)
console.log(minhaString.includes("alma")); // Retorna se a string contém 'alma' (true)
console.log(minhaString.indexOf("a")); // Retorna a primeira posição de 'a' (6)
console.log(minhaString.lastIndexOf("a")); // Retorna a última posição de 'a' (43)
console.log(minhaString.replace("a", "A")); // Substitui o primeiro 'a' por 'A'
console.log(minhaString.replaceAll("a", "A")); // Substitui todas as ocorrências de 'a' por 'A'
console.log(minhaString.toUpperCase()); // Retorna toda a string em caixa alta
