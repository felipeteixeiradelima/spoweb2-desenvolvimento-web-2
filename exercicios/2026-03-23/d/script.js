// EXECUTAR USANDO NODE.JS

const URL_CORRETA = "https://restcountries.com/v3.1/name/Brazil";
const URL_INVALIDA = "https://eu.sou.uma.url.invalida.com";

function getPromise(url) {
    let promise = new Promise(function (resolve, reject) {
        let req = new XMLHttpRequest();
        req.open("GET", url);
        req.onload = function () {
            if (req.status == 200) {
                resolve(req.response);
            } else {
                reject("Erro!");
            }
        };
        req.send();
    });
    return promise;
}

function testarPromise(url) {
    let promise = getPromise(url);

    console.log(`Testando promise para URL "${url}"...`);

    promise
        .then((value) => {
            console.log("Sucesso!");
            console.log("Valor da resposta:");
            console.log(value);
        })
        .catch((erro) => {
            console.log("Erro!");
            console.log("Valor do erro:");
            console.log(erro);
        })
        .finally(() => {
            console.log("Fim da chamada!");
        });
}

testarPromise(URL_CORRETA);

// Esperando 1,5s antes de testar o erro para manter o output organizado
setTimeout(testarPromise, 1500, URL_INVALIDA);
