/*TEMPORIZADOR*/

let btnStart = document.getElementById("btn-start");
let divTemporizador = document.getElementById("div-temporizador");
let TIEMPOINICIAL = 30;
let intervalRef = "";

let numVentanasAGenerar = Math.floor(Math.random() * 30)
let ventanasAbiertas = [];

btnStart.addEventListener("click", () => {
    /*Poner valores default */
    clearInterval(intervalRef);
    document.getElementById("avisos").innerText = "";
    // generarVentanaAleatoria();
    let segundosTemp = TIEMPOINICIAL;
    intervalRef = setInterval(() => {
        /*Mostramos los segundos por pantalla*/
        divTemporizador.innerText = segundosTemp;

        if (segundosTemp == TIEMPOINICIAL - 3) {
            /*GENERAR PANTALLAS*/

            document.getElementById("avisos").innerText = "FIESTA!!"

        }

        if (segundosTemp <= 0) {
            /* AQUI VA LA LOGICA DE CUANDO SE ACABA EL JUEGO*/

            clearInterval(intervalRef);
        }
        segundosTemp--;
    }, 1000);
});

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

    ventanasAbiertas.push(windowRef);
    console.log(ventanasAbiertas);

    /*MOVER VENTANA*/
    // Dimensiones de la ventana
    let width = windowRef.outerWidth;
    let height = windowRef.outerHeight;

    let x;
    let y;

    if (ventanasAbiertas.length == 1) {
        x = (screen.width - width) / 2;
        y = (screen.height - height) / 2;
    } else {
        x = (screen.width - Math.floor(Math.random() * screen.width));
        y = (screen.height - Math.floor(Math.random() * screen.height));
    }
    // Mueve la ventana al centro
    windowRef.moveTo(x, y);

    let windowBody = windowRef.document.body;
    windowBody.style.backgroundImage = pkmSeleccionado['img'];
    windowBody.innerHTML = pkmSeleccionado["name"];
    windowBody.style.color = pkmSeleccionado["color"];


    return windowRef;
}