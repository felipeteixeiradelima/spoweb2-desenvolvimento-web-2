var carro = {
    marca: "Nissan",
    modelo: "Versa",
    ano: 2017,
};

console.log("marca" in carro); // true
console.log("cor" in carro); // false
console.log("toString" in carro); // true

console.log(carro.hasOwnProperty("marca")); // true
console.log(carro.hasOwnProperty("cor")); // false
console.log(carro.hasOwnProperty("toString")); // false
