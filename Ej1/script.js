// 1. Crea un document HTML amb un botó “PLAY ENCERTA” que al clicar-lo:
// a. Generi un número aleatori entre 0 i 10
// b. Si és inferior a 5 mostra’l en vermell, si és igual o superior en verd
// c. Obri una nova finestra encerta.html amb un input i un botó “COMPARA”
// d. Al clicar sobre “COMPARA” mostra un missatge dins encerta.html i exercici02.html indicant
// si el valor dins el input és igual al número aleatori.
// e. Si s’encerta el número, tanca encerta.html des de exercici02.html
// f. Passats 7 segons, tanca encerta.html des de ella mateixa.
// g. Un cop tancada encerta.html, mostra dins exercici02.html el número d’intents (a més d’indicar si s’ha encertat o no el número).
// h. Guarda en una cookie si s’ha encertat o no el número en l’últim intent.
// i. Al carregar encerta.html, mostra si s’ha encertat o no en l’últim intent. 
function startGame() {

    let randValue = Math.floor(Math.random()*11) ;
    
    let resultado = document.getElementById("resultado");

    resultado.innerText = randValue; 

    if (randValue <5) {
        resultado.style = "color: red";
    }else{
        resultado.style = "color: green";
        sessionStorage.setItem("randValue", randValue);
        document.getElementById("bPlayEncerta").disabled = true;

        window.open("./encerta.html", "_blank", 'width=600,height=400' );
    }
}
