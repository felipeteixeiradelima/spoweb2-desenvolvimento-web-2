var objetoA = {
    umaFuncao: function () {
        console.log("Essa é uma função!");
    },
};

var objetoB = {
    umaFuncao: objetoA.umaFuncao,
};

objetoA.umaFuncao();
objetoB.umaFuncao();
