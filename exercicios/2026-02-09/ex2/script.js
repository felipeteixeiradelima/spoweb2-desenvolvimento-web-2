// CONSTANTES COM IDs/NAMEs DE ELEMENTOS
const NOME_INPUT_ID = "nome";
const CELULAR_INPUT_ID = "celular";
const CIDADE_INPUT_ID = "cidade";
const CHEGADA_INPUT_ID = "chegada";
const PARTIDA_INPUT_ID = "partida";
const ADULTOS_INPUT_ID = "adultos";
const CRANCAS_INPUT_ID = "criancas";
const CRANCAS_MENORES_INPUT_ID = "criancas_menores";


// ELEMENTOS
const inputNome = document.getElementById(NOME_INPUT_ID);
const inputCelular = document.getElementById(CELULAR_INPUT_ID);
const inputCidade = document.getElementById(CIDADE_INPUT_ID);
const inputChegada = document.getElementById(CHEGADA_INPUT_ID);
const inputPartida = document.getElementById(PARTIDA_INPUT_ID);
const inputAdultos = document.getElementById(ADULTOS_INPUT_ID);
const inputCriancas = document.getElementById(CRANCAS_INPUT_ID);
const inputCriancasMenores = document.getElementById(CRANCAS_MENORES_INPUT_ID);

function validaNome() {
    if (inputNome === null) return;

    const nome = inputNome.value.trim();

    if (nome === null | nome.length === 0) {
        inputNome.setCustomValidity("Digite um nome.");
        return;
    }

    const regExpNome = /^[a-zá-ÿ\s]+$/gmi;

    if (!regExpNome.test(nome)) {
        inputNome.setCustomValidity("O nome deve ter somente letras e espaços.");
        return;
    }

    if (!nome.includes(" ")) {
        inputNome.setCustomValidity("O nome deve conter ao menos um espaço.");
        return;
    }

    inputNome.setCustomValidity("");
}


function validaCidade() {
    if (inputCidade === null) return;

    const cidade = inputCidade.value.trim();

    if (cidade === null | cidade.length === 0) {
        inputCidade.setCustomValidity("Digite uma cidade.");
        return;
    }

    const regExpNome = /^[a-zá-ÿ\s]+$/gmi;

    if (!regExpNome.test(cidade)) {
        inputCidade.setCustomValidity("A cidade deve ter somente letras e espaços.");
        return;
    }

    inputCidade.setCustomValidity("");
}

// EVENT LISTENERS

// Nome
try {
    inputNome.addEventListener("change", validaNome);
    inputNome.addEventListener("input", validaNome);
} catch (e) {}

// Cidade
try {
    inputCidade.addEventListener("change", validaNome);
    inputCidade.addEventListener("input", validaNome);
} catch (e) {}
