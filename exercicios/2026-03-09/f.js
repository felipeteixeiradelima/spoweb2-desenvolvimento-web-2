var carro = {
    marca: "Nissan",
    modelo: "Versa",
    ano: 2017,
};

console.log("ano" in carro); // true

delete carro.ano;

console.log("ano" in carro); // false
