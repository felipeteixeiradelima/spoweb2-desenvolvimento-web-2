import { inputNome, inputCidade, inputCelular, inputCriancasMenores, inputCriancas } from "./elements.js";

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

    const regExpNome = /^[a-zá-ÿ\s]+$/gmi;

    if (!regExpNome.test(cidade)) {
        alert("A cidade deve ter somente letras e espaços.");
        return;
    }
}

function validaCelular() {
    if (inputCelular === null) return;

    const celular = inputCelular.value.trim();

    if (celular === null | celular.length === 0) {
        alert("Digite um celular.");
        return;
    }

    const regExpNome = /^[\d\s-]+$/gmi;

    if (!regExpNome.test(celular)) {
        alert("O celular deve ter somente números, espaços e traços.");
        return;
    }
}

function validaCriancas() {
    if (inputCriancas === null | inputCriancasMenores === null) return;

    const qtdCriancas = inputCriancas.value;
    const qtdCriancasMenores = inputCriancasMenores.value;

    if (qtdCriancasMenores > qtdCriancas) {
        inputCriancas.value = qtdCriancasMenores;
    }
}

function validaCriancasMenores() {
    if (inputCriancas === null | inputCriancasMenores === null) return;

    const qtdCriancas = inputCriancas.value;
    const qtdCriancasMenores = inputCriancasMenores.value;

    if (qtdCriancasMenores > qtdCriancas) {
        inputCriancasMenores.value = qtdCriancas;
    }

    inputCriancasMenores.max = qtdCriancas;
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

// Criancas menores
try {
    inputCriancas.addEventListener("input", validaCriancasMenores);
} catch (e) {}
