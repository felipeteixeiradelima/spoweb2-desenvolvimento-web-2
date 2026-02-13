import { inputChegada, inputPartida, btnCalcularDiarias, spanDiarias } from "./elements.js";

function calculaDiarias() {
    if (inputChegada === null | inputPartida === null) return;

    const dataChegada = new Date(inputChegada.value);
    const dataPartida = new Date(inputPartida.value);

    const diarias = (dataPartida - dataChegada) / (1000 * 60 * 60 * 24);

    if (diarias < 0) {
        inputPartida.style.backgroundColor = "yellow";
        spanDiarias.innerHTML = ""
        alert("A data de chegada não pode ser maior que a data de partida!");
        return;
    }

    inputPartida.style.backgroundColor = "white";
    spanDiarias.innerHTML = `Sua reserva tem ${diarias} diaria(s).`;
}

try {
    btnCalcularDiarias.addEventListener("click", calculaDiarias);
} catch (e) {}
