let puntos_usu = 0;
let puntos_ord = 0;
let puntos_usu_span;
let puntos_ord_span;
let resultado;
let img_Ord;

this.onload = function () {
    iniciar();
}

function iniciar() {
    img_ord = document.getElementById("img_ordenador");
    puntos_usu_span = document.getElementById("puntos_Usu");
    puntos_ord_span = document.getElementById("puntos_Ord");
    resultado = document.getElementById("p_resultado")
}

function jugar(jugada_usu) {
    let jugadaOrd = obtenerJug_Ordenador();
    switch (jugada_usu + jugadaOrd) {
        case "rt":
        case "pr":
        case "tp":
            //console.log("Gana")
            jugador_Gana(jugada_usu, jugadaOrd)

            break;
        case "rp":
        case "pt":
        case "tr":
            //console.log("Pierde")
            jugador_Pierde(jugada_usu, jugadaOrd)


            break;
        case "rr":
        case "pp":
        case "tt":
            //console.log("Empate")
            empate()
            break;
    }
}

function obtenerJug_Ordenador() {
    let jug = Math.floor(Math.random(6) * 3);
    let opciones = ['r', 'p', 't'];
    let imgs = ["piedra.png", "papel.png", "tijeras.png"];

    img_ord.setAttribute("src", imgs[jug]);
    let divOrdenador = document.getElementById("jugada_ordenador");
    divOrdenador.style.display = "inline-block";
    return opciones[jug];
}

function jugador_Gana(jugada_usu, jugada_ord) {
    //Si el jugador gana mostramos el texto correspondiente dependiendo de los argumentos que nos llegan,
    // por ejemplo "Piedra gana tijeras"
    puntos_usu = puntos_usu + 1;
    puntos_usu_span.innerHTML = puntos_usu;
    let nombre_jugada_uso = mostrarNombre(jugada_usu);
    let nombre_jugada_ord = mostrarNombre(jugada_ord);
    resultado.innerHTML = nombre_jugada_uso + " gana a " + nombre_jugada_ord;
}

function jugador_Pierde(jugada_usu, jugada_ord) {
    //Si el jugador pierde mostramos el texto correspondiente dependiendo de los argumentos que nos llegan,
    // por ejemplo "Piedra pierde con papel"
    puntos_ord = puntos_ord + 1;
    puntos_ord_span.innerHTML = puntos_ord;
    let nombre_jugada_uso = mostrarNombre(jugada_usu);
    let nombre_jugada_ord = mostrarNombre(jugada_ord);
    resultado.innerHTML = nombre_jugada_uso + " pierde con " + nombre_jugada_ord;

}

function empate() {
    //mostramos el texto empate
    resultado.innerHTML = "Empate!!";
}

function mostrarNombre(id) {
    switch (id) {
        case "r":
            return  "Piedra";

        case "p":
            return "Papel";
            break

        case "t":
            return "Tijeras";


    }
}