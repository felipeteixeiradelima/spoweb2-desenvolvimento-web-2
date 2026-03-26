// Criando um objeto literal
var objeto1 = {
    nome: "Meu objeto",
};

// Sobrescrevendo método hasOwnProperty()
objeto1.hasOwnProperty = function (propriedade) {
    if (propriedade in objeto1) {
        return "Sim, o objeto tem esta propriedade";
    }

    return "Não, o objeto não tem esta propriedade";
};

// Testando o método personalizado
console.log(objeto1.hasOwnProperty("idade")); // "Não..."
console.log(objeto1.hasOwnProperty("nome")); // "Sim..."
console.log(objeto1.hasOwnProperty("toString")); // "Sim..."

// Deletando a propriedade própria hasOwnProperty()
delete objeto1.hasOwnProperty

// Testando o método após deleção
console.log(objeto1.hasOwnProperty("idade")); // false
console.log(objeto1.hasOwnProperty("nome")); // true
console.log(objeto1.hasOwnProperty("toString")); // false
