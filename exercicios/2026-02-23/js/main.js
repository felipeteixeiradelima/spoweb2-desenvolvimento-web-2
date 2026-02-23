import {
    alterarFamiliaFonte,
    alterarTamanhoFonteES5,
    alterarTamanhoFonteES6Arrow,
    calcularHipotenusa,
    imprimirHipotenusaNaTela,
} from "./functions.js";

import {
    ID_PARAGRAFO_1,
    ID_PARAGRAFO_2,
    ID_PARAGRAFO_3,
    ID_FORM_TRIANGULO,
} from "./settings.js";

// a)
alterarFamiliaFonte(ID_PARAGRAFO_1, "Courier New");

// b)
alterarTamanhoFonteES5(ID_PARAGRAFO_2, "22px");

// c)
alterarTamanhoFonteES6Arrow(ID_PARAGRAFO_3, "30px");

// d)
document.getElementById(ID_FORM_TRIANGULO).addEventListener(
    "submit",
    function (event) {
        event.preventDefault();
        imprimirHipotenusaNaTela(calcularHipotenusa)
    }
);
