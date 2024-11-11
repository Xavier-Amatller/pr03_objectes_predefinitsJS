let TIEMPOINICIAL = 30;
let intervalRef = "";
let numVentanasAGenerar = Math.floor(Math.random() * 10 + 5);
let ultimasDosVentanasClicadas = [];
let arrayVentanasActivas = [];
let contadorVentanasActivas = 0;

document.getElementById("btn-start").addEventListener("click", () => {
    /*Poner valores default */
    clearInterval(intervalRef);
    arrayVentanasActivas = [];

    document.getElementById("ventanasActivas").innerText = "";
    document.getElementById("mensajeFinal").innerText = "";

    let segundosTemp = TIEMPOINICIAL;

    intervalRef = setInterval(() => {
        /*Mostramos los segundos por pantalla*/
        document.getElementById("div-temporizador").innerText = segundosTemp;
        document.getElementById("ventanasActivas").innerText = "Ventanas Activas: " + contadorVentanasActivas;

        if (segundosTemp == TIEMPOINICIAL - 3) {
            /*GENERAR PANTALLAS*/
            for (let index = 0; index < numVentanasAGenerar; index++) {
                generarVentanaAleatoria();
            }
            document.getElementById("totalVentanasGeneradas").innerHTML = "Ventanas Generadas: " +
                numVentanasAGenerar;
        }

        if (contadorVentanasActivas == 0 && segundosTemp < TIEMPOINICIAL - 3) {
            acabarPartida();
            document.getElementById("mensajeFinal").innerText = "Has ganado, muy BIEN!";
        }

        if (segundosTemp <= 0) {
            acabarPartida();
            document.getElementById("mensajeFinal").innerText = "Has perdido, que pena!, vuelve a intentarlo!";
        }
        segundosTemp--;
    }, 1000);
});

function mismaVentana() {
    return ultimasDosVentanasClicadas.every(elemento => elemento === ultimasDosVentanasClicadas[0]);
}

function comprobarColorVentanas() {
    return ultimasDosVentanasClicadas[0].document.body.innerText == ultimasDosVentanasClicadas[1].document.body.innerText;
}

function generarVentanaAleatoria() {

    let pokemons = [
        { "name": "bulbasaur", "color": "green", "img": "url('https://images.wikidexcdn.net/mwuploads/wikidex/archive/4/43/20150621055301%21Bulbasaur.png')" },
        { "name": "squirtle", "color": "blue", "img": "url('https://images.wikidexcdn.net/mwuploads/wikidex/archive/e/e3/20160309230820%21Squirtle.png')" },
        { "name": "charmander", "color": "red", "img": "url('https://images.wikidexcdn.net/mwuploads/wikidex/archive/5/56/20190805232004%21Charmander.png')" },
        { "name": "pikachu", "color": "goldenrod", "img": "url('https://images.wikidexcdn.net/mwuploads/wikidex/archive/7/77/20150621055555%21Pikachu.png" },
    ]

    let indice = Math.floor(Math.random() * pokemons.length);

    pkmSeleccionado = pokemons[indice];

    windowFeatures = "width=260,height=240,top=50,left=50";

    let windowRef = window.open("", Math.random() + "", windowFeatures);

    let windowBody = windowRef.document.body;

    windowBody.style.backgroundImage = pkmSeleccionado['img'];
    windowBody.innerHTML = pkmSeleccionado["name"];
    windowBody.style.color = pkmSeleccionado["color"];



    /*MOVER VENTANA*/
    // Dimensiones de la ventana
    let width = windowRef.outerWidth;
    let height = windowRef.outerHeight;

    let x;
    let y;
    if (contadorVentanasActivas.length == 0) {// Mueve la ventana al centro
        x = (screen.width - width) / 2;
        y = (screen.height - height) / 2;
    } else {                           //Mueve la ventana a una posicion aleatoria
        x = (screen.width - Math.floor(Math.random() * screen.width));
        y = (screen.height - Math.floor(Math.random() * screen.height));
    }

    windowRef.moveTo(x, y);

    /*Al clicar*/
    windowRef.addEventListener("click", () => { ventanaClicada(windowRef) });

    contadorVentanasActivas++;
    arrayVentanasActivas.push(windowRef);
    console.log(arrayVentanasActivas);
    console.log(contadorVentanasActivas);
}

function ventanaClicada(windowRef) {

    console.log("has clicado en un" + windowRef.document.body.style.color);

    ultimasDosVentanasClicadas.push(windowRef);

    if (!ultimasDosVentanasClicadas[1]) {

        console.log("primerClick en ventana");

    } else {

        if (mismaVentana()) {
            console.log("mismaVentana");
            generarVentanaAleatoria();

        } else {

            if (comprobarColorVentanas()) {
                console.log("true");

                arrayVentanasActivas = arrayVentanasActivas.filter(
                    ventana => !ultimasDosVentanasClicadas.includes(ventana)
                );

                ultimasDosVentanasClicadas[0].close();
                ultimasDosVentanasClicadas[1].close();
                contadorVentanasActivas -= 2;
            }

        }
        ultimasDosVentanasClicadas = [];
    }
}

document.getElementById("acabarPartida").addEventListener("click", () => {
    acabarPartida()
    document.getElementById("mensajeFinal").innerText = "Has acabado, vuelve a intentarlo!";
});

function acabarPartida() {
    clearInterval(intervalRef);
    arrayVentanasActivas.forEach(element => {
        element.close();
    });
}