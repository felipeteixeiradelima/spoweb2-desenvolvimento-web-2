import {
    alterarFamiliaFonte,
    alterarTamanhoFonteES5,
    alterarTamanhoFonteES6Arrow,
    calcularHipotenusa,
    imprimirHipotenusaNaTela,
    imprimirHipotenusaNaTelaDinamico,
    raizNumeroES5,
    raizNumeroES6,
    itemH,
} from "./functions.js";

import {
    ID_PARAGRAFO_1,
    ID_PARAGRAFO_2,
    ID_PARAGRAFO_3,
    ID_PARAGRAFO_4,
    ID_PARAGRAFO_5,
    ID_PARAGRAFO_6,
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
            ID_DIV_RESULTADO_TRIANGULO_EX_E
        );
    });

// f)
raizNumeroES5(ID_PARAGRAFO_4, 16, 4);

// g)
raizNumeroES6(ID_PARAGRAFO_5, 27, 3);

// h)
itemH(ID_PARAGRAFO_6, 420.69);
