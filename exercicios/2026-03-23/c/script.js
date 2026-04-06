const header = document.createElement("h1");
const INTERVALO_MS = 1000;

document.body.append(header);

function funcao1() {
    header.innerHTML += "5!";
}

function funcao2(callback) {
    setTimeout(callback, INTERVALO_MS);
    header.innerHTML += "4, ";
}

function funcao3(callback2, callback1) {
    setTimeout(callback2, INTERVALO_MS, callback1);
    header.innerHTML += "3, ";
}

function funcao4(callback3, callback2, callback1) {
    setTimeout(callback3, INTERVALO_MS, callback2, callback1);
    header.innerHTML += "2, ";
}

function funcao5(callback4, callback3, callback2, callback1) {
    setTimeout(callback4, INTERVALO_MS, callback3, callback2, callback1);
    header.innerHTML += "1, ";
}

funcao5(funcao4, funcao3, funcao2, funcao1);
