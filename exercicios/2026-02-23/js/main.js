/* -- IDS DE ELEMENTOS -- */
const ID_RESULTADO_TEMPLATE = "resultadoEx[char]";
const ID_RESULTADO_A = ID_RESULTADO_TEMPLATE.replace("[char]", "A");
const ID_RESULTADO_B = ID_RESULTADO_TEMPLATE.replace("[char]", "B");
const ID_RESULTADO_C = ID_RESULTADO_TEMPLATE.replace("[char]", "C");
const ID_RESULTADO_D = ID_RESULTADO_TEMPLATE.replace("[char]", "D");
const ID_RESULTADO_E = ID_RESULTADO_TEMPLATE.replace("[char]", "E");
const ID_RESULTADO_F = ID_RESULTADO_TEMPLATE.replace("[char]", "F");
const ID_RESULTADO_G = ID_RESULTADO_TEMPLATE.replace("[char]", "G");
const ID_RESULTADO_H = ID_RESULTADO_TEMPLATE.replace("[char]", "H");
const ID_RESULTADO_I = ID_RESULTADO_TEMPLATE.replace("[char]", "I");

const ID_INPUT_TEMPLATE = "input[num]Ex[char]";
const ID_INPUT_1_A = ID_INPUT_TEMPLATE.replace("[num]", "1").replace("[char]", "A");
const ID_INPUT_1_B = ID_INPUT_TEMPLATE.replace("[num]", "1").replace("[char]", "B");
const ID_INPUT_1_C = ID_INPUT_TEMPLATE.replace("[num]", "1").replace("[char]", "C");
const ID_INPUT_1_D = ID_INPUT_TEMPLATE.replace("[num]", "1").replace("[char]", "D");
const ID_INPUT_2_D = ID_INPUT_TEMPLATE.replace("[num]", "2").replace("[char]", "D");
const ID_INPUT_1_E = ID_INPUT_TEMPLATE.replace("[num]", "1").replace("[char]", "E");
const ID_INPUT_2_E = ID_INPUT_TEMPLATE.replace("[num]", "2").replace("[char]", "E");
const ID_INPUT_1_F = ID_INPUT_TEMPLATE.replace("[num]", "1").replace("[char]", "F");
const ID_INPUT_2_F = ID_INPUT_TEMPLATE.replace("[num]", "2").replace("[char]", "F");
const ID_INPUT_1_G = ID_INPUT_TEMPLATE.replace("[num]", "1").replace("[char]", "G");
const ID_INPUT_2_G = ID_INPUT_TEMPLATE.replace("[num]", "2").replace("[char]", "G");
const ID_INPUT_1_H = ID_INPUT_TEMPLATE.replace("[num]", "1").replace("[char]", "H");
const ID_INPUT_1_I = ID_INPUT_TEMPLATE.replace("[num]", "1").replace("[char]", "I");
const ID_INPUT_1_K = ID_INPUT_TEMPLATE.replace("[num]", "1").replace("[char]", "K");

const ID_BTN_EXECUTAR_TEMPLATE = "btnExecutarEx[char][opt]";
const ID_BTN_EXECUTAR_A = ID_BTN_EXECUTAR_TEMPLATE.replace("[char]", "A").replace("[opt]", "");
const ID_BTN_EXECUTAR_B = ID_BTN_EXECUTAR_TEMPLATE.replace("[char]", "B").replace("[opt]", "");
const ID_BTN_EXECUTAR_C = ID_BTN_EXECUTAR_TEMPLATE.replace("[char]", "C").replace("[opt]", "");
const ID_BTN_EXECUTAR_D = ID_BTN_EXECUTAR_TEMPLATE.replace("[char]", "D").replace("[opt]", "");
const ID_BTN_EXECUTAR_E = ID_BTN_EXECUTAR_TEMPLATE.replace("[char]", "E").replace("[opt]", "");
const ID_BTN_EXECUTAR_F = ID_BTN_EXECUTAR_TEMPLATE.replace("[char]", "F").replace("[opt]", "");
const ID_BTN_EXECUTAR_G = ID_BTN_EXECUTAR_TEMPLATE.replace("[char]", "G").replace("[opt]", "");
const ID_BTN_EXECUTAR_H = ID_BTN_EXECUTAR_TEMPLATE.replace("[char]", "H").replace("[opt]", "");
const ID_BTN_EXECUTAR_I = ID_BTN_EXECUTAR_TEMPLATE.replace("[char]", "I").replace("[opt]", "");
const ID_BTN_EXECUTAR_J = ID_BTN_EXECUTAR_TEMPLATE.replace("[char]", "J").replace("[opt]", "");
const ID_BTN_EXECUTAR_K_MAIUSCULAS = ID_BTN_EXECUTAR_TEMPLATE.replace("[char]", "K").replace(
    "[opt]",
    "Maiusculas",
);
const ID_BTN_EXECUTAR_K_MINUSCULAS = ID_BTN_EXECUTAR_TEMPLATE.replace("[char]", "K").replace(
    "[opt]",
    "Minusculas",
);

const ID_BTN_RESETAR_TEMPLATE = "btnResetarEx[char]";
const ID_BTN_RESETAR_A = ID_BTN_RESETAR_TEMPLATE.replace("[char]", "A");
const ID_BTN_RESETAR_B = ID_BTN_RESETAR_TEMPLATE.replace("[char]", "B");
const ID_BTN_RESETAR_C = ID_BTN_RESETAR_TEMPLATE.replace("[char]", "C");
const ID_BTN_RESETAR_D = ID_BTN_RESETAR_TEMPLATE.replace("[char]", "D");
const ID_BTN_RESETAR_E = ID_BTN_RESETAR_TEMPLATE.replace("[char]", "E");
const ID_BTN_RESETAR_F = ID_BTN_RESETAR_TEMPLATE.replace("[char]", "F");
const ID_BTN_RESETAR_G = ID_BTN_RESETAR_TEMPLATE.replace("[char]", "G");
const ID_BTN_RESETAR_H = ID_BTN_RESETAR_TEMPLATE.replace("[char]", "H");
const ID_BTN_RESETAR_I = ID_BTN_RESETAR_TEMPLATE.replace("[char]", "I");

/* -- DEFINIÇÃO DE FUNÇÕES -- */

// Uso geral
function exibirResultado(idElementoDiv, texto) {
    const elementoResultado = document.getElementById(idElementoDiv);
    if (texto) {
        elementoResultado.children[0].innerHTML = texto;
    }
    elementoResultado.hidden = false;
}

function esconderResultado(idElementoDiv) {
    const elementoResultado = document.getElementById(idElementoDiv);
    elementoResultado.hidden = true;
}

function adicionarEventListener(idElemento, event, funcaoEvento, ...args) {
    document.getElementById(idElemento).addEventListener(event, () => funcaoEvento(args));
}

function configurarItens() {
    configurarItemA();
    configurarItemB();
    configurarItemC();
    configurarItemD();
    configurarItemE();
    configurarItemF();
    configurarItemG();
    configurarItemH();
    configurarItemI();
    configurarItemJ();
    configurarItemK();
}

// a)
function alterarFonteFamilia(elemento, familia) {
    elemento.style.fontFamily = familia;
}

function executarItemA() {
    const familia = document.getElementById(ID_INPUT_1_A).value.trim();
    if (familia === null) return;

    const elementoResultado = document.getElementById(ID_RESULTADO_A);

    alterarFonteFamilia(elementoResultado, familia);
}

function resetarItemA() {
    const elementoResultado = document.getElementById(ID_RESULTADO_A);

    alterarFonteFamilia(elementoResultado, null);
}

function configurarItemA() {
    adicionarEventListener(ID_BTN_EXECUTAR_A, "click", executarItemA);
    adicionarEventListener(ID_BTN_RESETAR_A, "click", resetarItemA);
}

// b)
var alterarTamanhoFonteES5 = function (elemento, tamanho) {
    elemento.style.fontSize = tamanho;
};

function executarItemB() {
    let tamanho = document.getElementById(ID_INPUT_1_B).value.trim();
    if (tamanho === null || tamanho === "") return;

    tamanho = tamanho + "px";

    const elementoResultado = document.getElementById(ID_RESULTADO_B);

    alterarTamanhoFonteES5(elementoResultado, tamanho);
}

function resetarItemB() {
    const elementoResultado = document.getElementById(ID_RESULTADO_B);

    alterarTamanhoFonteES5(elementoResultado, null);
}

function configurarItemB() {
    adicionarEventListener(ID_BTN_EXECUTAR_B, "click", executarItemB);
    adicionarEventListener(ID_BTN_RESETAR_B, "click", resetarItemB);
}

// c)
var alterarTamanhoFonteES6Arrow = (elemento, tamanho) => (elemento.style.fontSize = tamanho);

function executarItemC() {
    let tamanho = document.getElementById(ID_INPUT_1_C).value.trim();
    if (tamanho === null || tamanho === "") return;

    tamanho = tamanho + "px";

    const elementoResultado = document.getElementById(ID_RESULTADO_C);

    alterarTamanhoFonteES5(elementoResultado, tamanho);
}

function resetarItemC() {
    const elementoResultado = document.getElementById(ID_RESULTADO_C);

    alterarTamanhoFonteES5(elementoResultado, null);
}

function configurarItemC() {
    adicionarEventListener(ID_BTN_EXECUTAR_C, "click", executarItemC);
    adicionarEventListener(ID_BTN_RESETAR_C, "click", resetarItemC);
}

// d)
var calcularHipotenusa = function (valorCatetoA, valorCatetoB) {
    const hipotenusa = Math.sqrt(valorCatetoA ** 2 + valorCatetoB ** 2);
    return hipotenusa;
};

function imprimirHipotenusaNaTela(
    idElemento,
    tamanhoCatetoA,
    tamanhoCatetoB,
    funcaoCalculaHipotenusa,
) {
    const hipotenusa = funcaoCalculaHipotenusa(tamanhoCatetoA, tamanhoCatetoB);

    exibirResultado(idElemento, `A hipotenusa desse triângulo mede ${hipotenusa}`);
}

function executarItemD() {
    let tamanhoCatetoA = document.getElementById(ID_INPUT_1_D).value.trim();
    if (tamanhoCatetoA === null || tamanhoCatetoA === "") return;

    let tamanhoCatetoB = document.getElementById(ID_INPUT_2_D).value.trim();
    if (tamanhoCatetoB === null || tamanhoCatetoB === "") return;

    imprimirHipotenusaNaTela(ID_RESULTADO_D, tamanhoCatetoA, tamanhoCatetoB, calcularHipotenusa);
}

function resetarItemD() {
    esconderResultado(ID_RESULTADO_D);
}

function configurarItemD() {
    adicionarEventListener(ID_BTN_EXECUTAR_D, "click", executarItemD);
    adicionarEventListener(ID_BTN_RESETAR_D, "click", resetarItemD);
}

// e)
var calcularHipotenusaDinamico = new Function(
    "valorCatetoA",
    "valorCatetoB",
    "return Math.sqrt(valorCatetoA ** 2 + valorCatetoB ** 2)",
);

function executarItemE() {
    let tamanhoCatetoA = document.getElementById(ID_INPUT_1_E).value.trim();
    if (tamanhoCatetoA === null || tamanhoCatetoA === "") return;

    let tamanhoCatetoB = document.getElementById(ID_INPUT_2_E).value.trim();
    if (tamanhoCatetoB === null || tamanhoCatetoB === "") return;

    // MESMA FUNÇÃO DE IMPRIMIR DO ITEM ANTERIOR
    imprimirHipotenusaNaTela(
        ID_RESULTADO_E,
        tamanhoCatetoA,
        tamanhoCatetoB,
        calcularHipotenusaDinamico, // NOVA FUNÇÃO ANÔNIMA E DINÂMICA
    );
}

function resetarItemE() {
    esconderResultado(ID_RESULTADO_E);
}

function configurarItemE() {
    adicionarEventListener(ID_BTN_EXECUTAR_E, "click", executarItemE);
    adicionarEventListener(ID_BTN_RESETAR_E, "click", resetarItemE);
}

// f)
function executarItemF() {
    let radicando = document.getElementById(ID_INPUT_1_F).value.trim();
    if (radicando === null || radicando === "") return;

    let indice = document.getElementById(ID_INPUT_2_F).value.trim();
    if (indice === null || indice === "") return;

    // FUNÇÃO AUTOINVOCADA
    let resultado = (function (radicando, indice) {
        return radicando ** (1 / indice);
    })(radicando, indice);

    exibirResultado(
        ID_RESULTADO_F,
        `O resultado de <sup>${indice}</sup> √(${radicando}) vale ${resultado}`,
    );
}

function resetarItemF() {
    esconderResultado(ID_RESULTADO_F);
}

function configurarItemF() {
    adicionarEventListener(ID_BTN_EXECUTAR_F, "click", executarItemF);
    adicionarEventListener(ID_BTN_RESETAR_F, "click", resetarItemF);
}

// g)
function executarItemG() {
    let radicando = document.getElementById(ID_INPUT_1_G).value.trim();
    if (radicando === null || radicando === "") return;

    let indice = document.getElementById(ID_INPUT_2_G).value.trim();
    if (indice === null || indice === "") return;

    // FUNÇÃO AUTOINVOCADA
    let resultado = ((radicando, indice) => radicando ** (1 / indice))(radicando, indice);

    exibirResultado(
        ID_RESULTADO_G,
        `O resultado de <sup>${indice}</sup> √(${radicando}) vale ${resultado}`,
    );
}

function resetarItemG() {
    esconderResultado(ID_RESULTADO_G);
}

function configurarItemG() {
    adicionarEventListener(ID_BTN_EXECUTAR_G, "click", executarItemG);
    adicionarEventListener(ID_BTN_RESETAR_G, "click", resetarItemG);
}

// h)
async function obterCotacao(codigoMoedas) {
    const url = `https://economia.awesomeapi.com.br/last/${codigoMoedas}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        const cotacao = parseFloat(eval(`data.${codigoMoedas.replace("-", "")}.bid`));
        return cotacao;
    } catch (error) {
        console.error("Erro ao buscar cotação", codigoMoedas, ":", error);
    }
}

// FUNÇÃO QUE RETORNA ARRAY INDEXADO
async function realParaDolarEuroArrayIndexado(valorReais) {
    const cotacaoRealParaDolar = await obterCotacao("BRL-USD");
    const cotacaoRealParaEuro = await obterCotacao("BRL-EUR");

    const valorDolar = valorReais * cotacaoRealParaDolar;
    const valorEuro = valorReais * cotacaoRealParaEuro;

    return [valorDolar, valorEuro];
}

async function executarItemH() {
    let valorReais = document.getElementById(ID_INPUT_1_H).value.trim();
    if (valorReais === null || valorReais === "") return;

    // FUNÇÃO QUE RETORNA ARRAY INDEXADO
    const valores = await realParaDolarEuroArrayIndexado(valorReais);

    const valorDolares = valores[0],
        valorEuros = valores[1];

    exibirResultado(
        ID_RESULTADO_H,
        `Dólar: US$ ${valorDolares.toFixed(2)}<br>
        Euro: € ${valorEuros.toFixed(2)}`,
    );
}

function resetarItemH() {
    esconderResultado(ID_RESULTADO_H);
}

function configurarItemH() {
    adicionarEventListener(ID_BTN_EXECUTAR_H, "click", executarItemH);
    adicionarEventListener(ID_BTN_RESETAR_H, "click", resetarItemH);
}

// i)
// FUNÇÃO QUE RETORNA ARRAY ASSOCIATIVO
async function realParaDolarEuroArrayAssossiativo(valorReais) {
    const cotacaoRealParaDolar = await obterCotacao("BRL-USD");
    const cotacaoRealParaEuro = await obterCotacao("BRL-EUR");

    const valorDolar = valorReais * cotacaoRealParaDolar;
    const valorEuro = valorReais * cotacaoRealParaEuro;

    return { valorDolar, valorEuro };
}

async function executarItemI() {
    let valorReais = document.getElementById(ID_INPUT_1_I).value.trim();
    if (valorReais === null || valorReais === "") return;

    // FUNÇÃO QUE RETORNA ARRAY INDEXADO
    const valores = await realParaDolarEuroArrayAssossiativo(valorReais);

    const valorDolares = valores.valorDolar,
        valorEuros = valores.valorEuro;

    exibirResultado(
        ID_RESULTADO_I,
        `Dólar: US$ ${valorDolares.toFixed(2)}<br>
        Euro: € ${valorEuros.toFixed(2)}`,
    );
}

function resetarItemI() {
    esconderResultado(ID_RESULTADO_I);
}

function configurarItemI() {
    adicionarEventListener(ID_BTN_EXECUTAR_I, "click", executarItemI);
    adicionarEventListener(ID_BTN_RESETAR_I, "click", resetarItemI);
}

// j)

function executarItemJ() {
    let mensagem = "Quem canta ";

    function closureCompletaFrase() {
        mensagem = mensagem.concat("seus males espanta.");
    }

    closureCompletaFrase();

    alert(mensagem);
}

function configurarItemJ() {
    adicionarEventListener(ID_BTN_EXECUTAR_J, "click", executarItemJ);
}

// K)
import { converterParaMaiusculas, converterParaMinusculas } from "./itemk.js";

function executarItemK(isMaiusculas) {
    if ((typeof isMaiusculas === "object") & (isMaiusculas.length > 0))
        isMaiusculas = isMaiusculas[0];

    if ((isMaiusculas !== true) & (isMaiusculas !== false)) return;

    let mensagem = document.getElementById(ID_INPUT_1_K).value.trim();
    if (mensagem === null || mensagem === "") return;

    let novaMensagem = isMaiusculas
        ? converterParaMaiusculas(mensagem)
        : converterParaMinusculas(mensagem);

    alert(novaMensagem);
}

function configurarItemK() {
    adicionarEventListener(ID_BTN_EXECUTAR_K_MAIUSCULAS, "click", executarItemK, true);
    adicionarEventListener(ID_BTN_EXECUTAR_K_MINUSCULAS, "click", executarItemK, false);
}

// CONFIGURA TODOS OS BOTÕES
configurarItens();
