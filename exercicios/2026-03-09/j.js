var carro = {
    marca: "Nissan",
    modelo: "Versa",
    ano: 2017,
};

Object.freeze(carro);

console.log(Object.isExtensible(carro)); // false
console.log(Object.isSealed(carro)); // true
console.log(Object.isFrozen(carro)); // true

// Tentando adicionar propriedade
carro.cor = "branco";
console.log(carro.cor); // undefined

// Tentando remover propriedade
delete carro.ano;
console.log(carro.ano); // 2017

// Tentando atualizar propriedade
carro.ano = 2020;
console.log(carro.ano); // 2017

// Tentando ler propriedade
modelo = carro.ano;
console.log(modelo); // 2017
