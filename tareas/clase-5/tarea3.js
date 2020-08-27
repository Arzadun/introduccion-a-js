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
    calcularTiempo();
    return false;
};

function crearBotonCalcular() {
    const $form = document.querySelector("#clases");
    const boton = document.createElement("button");

    boton.id = 'calcular';
    boton.innerText = "Calcular";

    $form.appendChild(boton);
}

function crearCampos() {
    const $form = document.querySelector("#clases");
    const div = document.createElement("div");

    const inputHoras = document.createElement("input");
    inputHoras.className = "horas";
    inputHoras.placeholder = "horas";
    div.appendChild(inputHoras);

    const inputMinutos = document.createElement("input");
    inputMinutos.className = "minutos";
    inputMinutos.placeholder = "minutos";
    div.appendChild(inputMinutos);

    const inputSegundos = document.createElement("input");
    inputSegundos.className = "segundos";
    inputSegundos.placeholder = "segundos";
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
    let acumuladorHoras, acumuladorMinutos, acumuladorSegundos;
    const botonCalcular = document.querySelector('#calcular');
    const horas = document.querySelectorAll('.horas');
    const minutos = document.querySelectorAll('.minutos');
    const segundos = document.querySelectorAll('.segundos');

    for (let i = 0; i < horas.length; i++) {
        let cantidadHoras = Number(horas[i].value);
        acumuladorHoras = + cantidadHoras;

        for (let j = 0; j < minutos.length; j++) {
            let cantidadMinutos = Number(minutos[j].value);
            acumuladorMinutos = + cantidadMinutos;

            for (let k = 0; k < segundos.length; k++) {
                let cantidadSegundos = Number(segundos[k].value);
                acumuladorSegundos = + cantidadSegundos;

            }
        }
    }

    function mostrarResultado() {
        const mostrar = document.querySelector('strong');
        mostrar.innerText = `El total de las clases tiene una duracion de ${acumuladorHoras} horas, ${acumuladorMinutos} minutos, y ${acumuladorSegundos} segundos .`
    }
    mostrarResultado();

}


