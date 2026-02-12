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
        alert("Digite um nome.");
        return;
    }

    const regExpNome = /^[a-zá-ÿ\s]+$/gmi;

    if (!regExpNome.test(nome)) {
        alert("O nome deve ter somente letras e espaços.");
        return;
    }

    if (!nome.includes(" ")) {
        alert("O nome deve conter ao menos um espaço.");
        return;
    }
}


function validaCidade() {
    if (inputCidade === null) return;

    const cidade = inputCidade.value.trim();

    if (cidade === null | cidade.length === 0) {
        alert("Digite uma cidade.");
        return;
    }

    const regExpCidade = /^[a-zá-ÿ\s]+$/gmi;

    if (!regExpCidade.test(cidade)) {
        alert("A cidade deve ter somente letras e espaços.");
        return;
    }
}

function validaCelular() {
    if (inputCelular === null) return;

    const celular = inputCelular.value.trim();

    if (celular === null | celular.length === 0) {
        alert("Digite um número de celular.");
        return;
    }

    const regExpCelular = /^[\d\s-]+$/gmi;

    if (!regExpCelular.test(celular)) {
        alert("O número de celular deve ter somente números, espaços ou traços.");
        return;
    }
}

function validaCriancas() {
    if (inputCriancas === null) return;

    let qtdCriancas = inputCriancas.value;

    let qtdCriancasMenores = inputCriancasMenores.value;

    if (qtdCriancasMenores > qtdCriancas) {
        inputCriancas.value = qtdCriancasMenores;
    }
}

function validaCriancasMenores() {
    if (inputCriancasMenores === null) return;

    let qtdCriancas = inputCriancas.value;

    let qtdCriancasMenores = inputCriancasMenores.value;

    inputCriancasMenores.max = qtdCriancas

    if (qtdCriancasMenores > qtdCriancas) {
        inputCriancasMenores.value = qtdCriancas;
    }
}

// EVENT LISTENERS

// Nome
try {
    inputNome.addEventListener("change", validaNome);
} catch (e) {}

// Cidade
try {
    inputCidade.addEventListener("change", validaCidade);
} catch (e) {}

// Celular
try {
    inputCelular.addEventListener("change", validaCelular);
} catch (e) {}

// Criancas
try {
    inputCriancasMenores.addEventListener("input", validaCriancas);
} catch (e) {}

// Criancas Menores
try {
    inputCriancas.addEventListener("input", validaCriancasMenores);
} catch (e) {}
