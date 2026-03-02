class Editor {
    constructor(texto) {
        this.texto = texto;
    }

    substitui(string, novaString) {
        this.texto = this.texto.replace(string, novaString);
    }

    busca(expressaoRegular) {
        return this.texto.search(expressaoRegular);
    }

    converteParaMaisuculas() {
        this.texto = this.texto.toUpperCase();
    }
}

var editor1 = new Editor("Com grandes poderes, vêm grandes responsabilidades.");

console.log("Texto original:", editor1.texto);

const STRING_BUSCA = /grandes/gm;
console.log(
    `Procurando ${STRING_BUSCA} no texto: ${editor1.busca(STRING_BUSCA)}`
);

editor1.substitui("o", "O");
console.log("Texto substituído:", editor1.texto);

editor1.converteParaMaisuculas();
console.log("Texto convertido para maiúsculas:", editor1.texto);
