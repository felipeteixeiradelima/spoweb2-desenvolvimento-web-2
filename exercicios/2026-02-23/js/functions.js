import {
    ID_INPUT_CATETO_A_EX_D,
    ID_INPUT_CATETO_B_EX_D,
    ID_DIV_RESULTADO_TRIANGULO_EX_D,
} from "./settings.js";

// a)
function alterarFamiliaFonte(idElemento, familia) {
    const elemento = document.getElementById(idElemento);
    elemento.style.fontFamily = familia;
}

// b)
var alterarTamanhoFonteES5 = function (idElemento, tamanho) {
    const elemento = document.getElementById(idElemento);
    elemento.style.fontSize = tamanho;
};

// c)
var alterarTamanhoFonteES6Arrow = (idElemento, tamanho) =>
    (document.getElementById(idElemento).style.fontSize = tamanho);

// d)
var calcularHipotenusa = function (valorCatetoA, valorCatetoB) {
    const hipotenusa = Math.sqrt(valorCatetoA ** 2 + valorCatetoB ** 2);
    return hipotenusa;
}

function imprimirHipotenusaNaTela(funcaoCalculaHipotenusa) {
    const valorCatetoA = document.getElementById(ID_INPUT_CATETO_A_EX_D).value;
    const valorCatetoB = document.getElementById(ID_INPUT_CATETO_B_EX_D).value;

    const elementoDivResultado = document.getElementById(ID_DIV_RESULTADO_TRIANGULO_EX_D);
    const elementoPResultado = elementoDivResultado.children[0];

    const hipotenusa = funcaoCalculaHipotenusa(valorCatetoA, valorCatetoB);

    elementoDivResultado.hidden = false;
    elementoPResultado.innerHTML = `A hipotenusa desse triângulo mede ${hipotenusa}`;
}

// e)
var imprimirHipotenusaNaTelaDinamico = new Function(
    "funcaoCalculaHipotenusa",
    "idCatetoA",
    "idCatetoB",
    "idDivResultado",
    "const valorCatetoA = document.getElementById(idCatetoA).value;" +
    "const valorCatetoB = document.getElementById(idCatetoB).value;" +
    "const elementoDivResultado = document.getElementById(idDivResultado);" +
    "const elementoPResultado = elementoDivResultado.children[0];" +
    "const hipotenusa = funcaoCalculaHipotenusa(valorCatetoA, valorCatetoB);" +
    "elementoDivResultado.hidden = false;" +
    "elementoPResultado.innerHTML = `A hipotenusa desse triângulo mede ${hipotenusa}`;"
)

/* ======================================================= */
export {
    alterarFamiliaFonte,
    alterarTamanhoFonteES5,
    alterarTamanhoFonteES6Arrow,
    calcularHipotenusa,
    imprimirHipotenusaNaTela,
    imprimirHipotenusaNaTelaDinamico,
};
