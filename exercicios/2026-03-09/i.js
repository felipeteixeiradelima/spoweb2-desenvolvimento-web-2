var carro = {
    marca: "Nissan",
    modelo: "Versa",
    ano: 2017,
};

Object.defineProperty(carro, "marca", {
    enumerable: false,
    configurable: false,
});

var descriptor = Object.getOwnPropertyDescriptor(carro, "marca");

console.log("Propriedades do atributo 'marca':");
for (propriedade in descriptor) {
    console.log(`${propriedade}: ${descriptor[propriedade]}`);
}
