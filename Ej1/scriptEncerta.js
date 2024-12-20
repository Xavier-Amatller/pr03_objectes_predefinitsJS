function compara() {

    setTimeout(() => {
        let randValue = sessionStorage.getItem("randValue");

        let inpValue = document.getElementById("valorAComparar").value;

        let mensaje = document.getElementById("mensaje");
        mensaje.innerText = "";

        let mensajeError = document.getElementById("mensajeError");
        mensajeError.innerText = "";

        if (isNaN(inpValue) || inpValue < 5 || inpValue > 10) {
            mensajeError.innerText = "Introduce un valor numerico entre 5 y 10";
        } else {
            if (inpValue === randValue) {
                mensaje.innerText = "Has acertado!!";
                window.opener.document.getElementById("resultado").innerText = `Has encertat el número`;

                setTimeout(() => { window.close("./encerta.html") }, 2000);
            } else {
                mensaje.innerText = "Haz fallado vuelve a intentarlo";
            }
        }
    }, 100)
}

let cuentaAtras = 7;
let intervalRef = setInterval(() => {
    document.getElementById("cuentaAtras").innerText = cuentaAtras;
    if (cuentaAtras === 0) {
        window.close("./encerta.html");
        closeInterval(intervalRef);
    };
    cuentaAtras--;
}, 1000)