import {
    alterarFamiliaFonte,
    alterarTamanhoFonteES5,
    alterarTamanhoFonteES6Arrow,
    calcularHipotenusa,
    imprimirHipotenusaNaTela,
    imprimirHipotenusaNaTelaDinamico,
} from "./functions.js";

import {
    ID_PARAGRAFO_1,
    ID_PARAGRAFO_2,
    ID_PARAGRAFO_3,
    ID_FORM_TRIANGULO_EX_D,
    ID_FORM_TRIANGULO_EX_E,
    ID_INPUT_CATETO_A_EX_E,
    ID_INPUT_CATETO_B_EX_E,
    ID_DIV_RESULTADO_TRIANGULO_EX_E,
} from "./settings.js";

// a)
alterarFamiliaFonte(ID_PARAGRAFO_1, "Courier New");

// b)
alterarTamanhoFonteES5(ID_PARAGRAFO_2, "22px");

// c)
alterarTamanhoFonteES6Arrow(ID_PARAGRAFO_3, "30px");

// d)
document
    .getElementById(ID_FORM_TRIANGULO_EX_D)
    .addEventListener("submit", function (event) {
        event.preventDefault();
        imprimirHipotenusaNaTela(calcularHipotenusa);
    });

// e)
document
    .getElementById(ID_FORM_TRIANGULO_EX_E)
    .addEventListener("submit", function (event) {
        event.preventDefault();
        imprimirHipotenusaNaTelaDinamico(
            calcularHipotenusa,
            ID_INPUT_CATETO_A_EX_E,
            ID_INPUT_CATETO_B_EX_E,
            ID_DIV_RESULTADO_TRIANGULO_EX_E,
        );
    });
