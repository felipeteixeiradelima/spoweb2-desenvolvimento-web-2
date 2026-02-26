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
const ID_RESULTADO_J = ID_RESULTADO_TEMPLATE.replace("[char]", "J");
const ID_RESULTADO_K = ID_RESULTADO_TEMPLATE.replace("[char]", "K");

const ID_INPUT_TEMPLATE = "input[num]Ex[char]";
const ID_INPUT_1_A = ID_INPUT_TEMPLATE.replace("[num]", "1").replace(
    "[char]",
    "A",
);
const ID_INPUT_1_B = ID_INPUT_TEMPLATE.replace("[num]", "1").replace(
    "[char]",
    "A",
);

/* -- DEFINIÇÃO DE FUNÇÕES */

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

// b)
var alterarTamanhoFonteES5 = function (elemento, tamanho) {
    elemento.style.fontSize = tamanho;
};

function executarItemB() {
    let tamanho = document.getElementById(ID_INPUT_1_B).value.trim();
    if (tamanho === null) return;

    tamanho = tamanho + "px";

    const elementoResultado = document.getElementById(ID_RESULTADO_B);

    alterarTamanhoFonteES5(elementoResultado, tamanho);
}

function resetarItemB() {
    const elementoResultado = document.getElementById(ID_RESULTADO_B);

    alterarTamanhoFonteES5(elementoResultado, null);
}
