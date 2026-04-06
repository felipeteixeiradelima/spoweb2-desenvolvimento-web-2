let texto =
    "Supõe tu um campo de batatas e duas tribos famintas. As batatas apenas chegam para " +
    "alimentar uma das tribos, que assim adquire forças para transpor a montanha e ir à outra " +
    "vertente, onde há batatas em abundância; mas, se as duas tribos dividirem em paz as batatas " +
    "do campo, não chegam a nutrir-se suficientemente e morrem de inanição. A paz, nesse caso, é " +
    "a destruição; a guerra é a conservação. Uma das tribos extermina a outra e recolhe os " +
    "despojos. (...) Ao vencido, ódio ou compaixão; ao vencedor, as batatas. " +
    "Machado de Assis - Quincas Borba (1891)";

function funcao1(texto) {
    const novoTexto = texto.replaceAll("batatas", "cenouras");
    return novoTexto;
}

function funcao2(texto) {
    const novoTexto = texto.replaceAll("cenouras", "Cenouras");
    return novoTexto;
}

function funcao3(texto) {
    const novoElemento = document.createElement("p");
    novoElemento.innerHTML = texto;
    document.body.append(novoElemento);
}

texto = funcao1(texto);
texto = funcao2(texto);
funcao3(texto);
