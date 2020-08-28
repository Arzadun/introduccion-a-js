//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.


document.querySelector("#enviar").onclick = function (event) {
    const cantidadClases = Number(document.querySelector("#cantidad").value);

    for (let i = 0; i < cantidadClases; i++) {
        crearCampos();
    }

    crearBotonCalcular();
    ocultarFormulario();

    document.querySelector('#calcular').onclick = function () {
        calcularTiempo();
        document.querySelector('strong').style.display = 'inline';
        return false;
    }

    document.querySelector('#limpiar').onclick = function () {
        document.querySelector('strong').style.display = 'none';
    }

    return false;
};

function crearBotonCalcular() {
    const $form = document.querySelector("#clases");
    const boton = document.createElement("button");
    const limpiar = document.createElement("button");

    boton.id = 'calcular';
    boton.innerText = "Calcular";

    limpiar.id = 'limpiar';
    limpiar.type = "reset";
    limpiar.textContent = "Limpiar";


    $form.appendChild(boton);
    $form.appendChild(limpiar);
}

function crearCampos() {
    const $form = document.querySelector("#clases");
    const div = document.createElement("div");

    const inputHoras = document.createElement("input");
    inputHoras.className = "horas";
    inputHoras.placeholder = "horas";
    inputHoras.type = "number";
    div.appendChild(inputHoras);

    const inputMinutos = document.createElement("input");
    inputMinutos.className = "minutos";
    inputMinutos.placeholder = "minutos";
    inputMinutos.type = "number";
    div.appendChild(inputMinutos);

    const inputSegundos = document.createElement("input");
    inputSegundos.className = "segundos";
    inputSegundos.placeholder = "segundos";
    inputSegundos.type = "number";
    div.appendChild(inputSegundos);

    $form.appendChild(div);
}

function ocultarFormulario() {
    const ocultar = document.querySelectorAll(".ocultar");
    for (let i = 0; i < ocultar.length; i++) {
        ocultar[i].style.display = "none";
    }
}


function calcularTiempo() {
    let acumuladorHoras = 0, acumuladorMinutos = 0, acumuladorSegundos = 0;

    const horas = document.querySelectorAll('.horas');
    const minutos = document.querySelectorAll('.minutos');
    const segundos = document.querySelectorAll('.segundos');

    for (let i = 0; i < horas.length; i++) {
        let cantidadHoras = Number(horas[i].value);
        acumuladorHoras += cantidadHoras;


    }

    for (let j = 0; j < minutos.length; j++) {
        let cantidadMinutos = Number(minutos[j].value);
        acumuladorMinutos += cantidadMinutos;


    }

    for (let k = 0; k < segundos.length; k++) {
        let cantidadSegundos = Number(segundos[k].value);
        acumuladorSegundos += cantidadSegundos;

    }

    calculos(acumuladorHoras, acumuladorMinutos, acumuladorSegundos);

}

function calculos(horas, minutos, segundos) {

    let minutos_A_Horas = 0, restoMinutos = 0;
    if (minutos <= 60) {
        restoMinutos = minutos;
        minutos_A_Horas = 0;
    } else {
        minutos_A_Horas = Math.round(minutos / 60);
        restoMinutos = minutos % 60;
    }

    let segundos_A_Minutos = 0, restoSegundos = 0;
    if (segundos <= 60) {
        restoSegundos = segundos;
        segundos_A_Minutos = 0;
    } else {
        segundos_A_Minutos = Math.round(segundos / 60);
        restoSegundos = segundos % 60;
    }

    horas += minutos_A_Horas;
    restoMinutos += segundos_A_Minutos;


    function mostrarResultado() {
        const mostrar = document.querySelector('strong');
        mostrar.innerText = `Las clases tienen una duracion de ${horas} horas, ${restoMinutos} minutos, y ${restoSegundos} segundos .`
    }
    mostrarResultado();

}




