// Criando objeto esporte
esporte = {
    id: 1,
    modalidade: "voleibol",
    categoria: "esporte coletivo",
    toString: function () {
        return this.modalidade;
    },
};

console.log(esporte.toString());
console.log(`A modalidade do esporte é ${esporte}`);
