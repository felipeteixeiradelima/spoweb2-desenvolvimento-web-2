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
};

function imprimirHipotenusaNaTela(funcaoCalculaHipotenusa) {
    const valorCatetoA = document.getElementById(ID_INPUT_CATETO_A_EX_D).value;
    const valorCatetoB = document.getElementById(ID_INPUT_CATETO_B_EX_D).value;

    const elementoDivResultado = document.getElementById(
        ID_DIV_RESULTADO_TRIANGULO_EX_D
    );
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
);

// f) a função autoinvocada está dentro dessa função
function raizNumeroES5(idElemento, radicando, indice) {
    const elementoP = document.getElementById(idElemento);

    // Função autoinvocada
    let resultado = (function (radicando, indice) {
        return radicando ** (1 / indice);
    })(radicando, indice);

    elementoP.innerHTML = `Item f): o resultado de <sup>${indice}</sup> √(${radicando}) vale ${resultado}`;
}

// g) a função autoinvocada está dentro dessa função
function raizNumeroES6(idElemento, radicando, indice) {
    const elementoP = document.getElementById(idElemento);

    // Função autoinvocada
    let resultado = ((radicando, indice) => radicando ** (1 / indice))(
        radicando,
        indice
    );

    elementoP.innerHTML = `Item g): o resultado de <sup>${indice}</sup> √(${radicando}) vale ${resultado}`;
}

// h)
async function obterCotacao(codigoMoedas) {
    const url = `https://economia.awesomeapi.com.br/last/${codigoMoedas}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        const cotacao = parseFloat(
            eval(`data.${codigoMoedas.replace("-", "")}.bid`)
        );
        return cotacao;
    } catch (error) {
        console.error("Erro ao buscar cotação", codigoMoedas, ":", error);
    }
}

async function realParaDolarEuroArrayIndexado(valorReais) {
    const cotacaoRealParaDolar = await obterCotacao("BRL-USD");
    const cotacaoRealParaEuro = await obterCotacao("BRL-EUR");

    const valorDolar = valorReais * cotacaoRealParaDolar;
    const valorEuro = valorReais * cotacaoRealParaEuro;

    return [valorDolar, valorEuro];
}

async function itemH(idElemento, valorReais) {
    const elemento = document.getElementById(idElemento);
    const valores = await realParaDolarEuroArrayIndexado(valorReais);

    const valorDolares = valores[0].toFixed(2),
        valorEuros = valores[1].toFixed(2);

    elemento.innerHTML = `Item h): o valor de R$${valorReais} equivale a US$${valorDolares} e €${valorEuros}`;
}

// i)

async function realParaDolarEuroArrayAssossiativo(valorReais) {
    const cotacaoRealParaDolar = await obterCotacao("BRL-USD");
    const cotacaoRealParaEuro = await obterCotacao("BRL-EUR");

    const valorDolar = valorReais * cotacaoRealParaDolar;
    const valorEuro = valorReais * cotacaoRealParaEuro;

    return { valorDolar, valorEuro };
}

async function itemI(idElemento, valorReais) {
    const elemento = document.getElementById(idElemento);
    const valores = await realParaDolarEuroArrayAssossiativo(valorReais);

    const valorDolares = valores.valorDolar.toFixed(2),
        valorEuros = valores.valorEuro.toFixed(2);

    elemento.innerHTML = `Item i): o valor de R$${valorReais} equivale a US$${valorDolares} e €${valorEuros}`;
}

// j)
function itemJ() {
    let mensagem = "Quem canta ";

    function closureCompletaFrase() {
        mensagem = mensagem.concat("seus males espanta.");
    }

    closureCompletaFrase();

    alert(mensagem);
}

// k)
import { converterParaMaiusculas, converterParaMinusculas } from "./itemk.js";

function itemK(idElementoInputTexto, isMaiusculas) {
    const elementoTexto = document.getElementById(idElementoInputTexto);

    if (isMaiusculas) {
        converterParaMaiusculas(elementoTexto.value);
    } else {
        converterParaMinusculas(elementoTexto.value);
    }
}

/* ======================================================= */
export {
    alterarFamiliaFonte,
    alterarTamanhoFonteES5,
    alterarTamanhoFonteES6Arrow,
    calcularHipotenusa,
    imprimirHipotenusaNaTela,
    imprimirHipotenusaNaTelaDinamico,
    raizNumeroES5,
    raizNumeroES6,
    itemH,
    itemI,
    itemJ,
    itemK,
};
