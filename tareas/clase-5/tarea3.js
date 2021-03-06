//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.


document.querySelector("#enviar").onclick = function (event) {
    const cantidadClases = Number(document.querySelector("#cantidad").value);

    crearClases(cantidadClases);
    crearBotones();
    ocultarFormulario();

    return false;
};

function crearBotones() {
    const $form = document.querySelector("#clases");
    const calcular = document.createElement("button");
    const limpiar = document.createElement("button");
    const textoResultado = document.querySelector('strong');

    calcular.id = 'calcular';
    calcular.innerText = "Calcular";

    limpiar.id = 'limpiar';
    limpiar.type = "reset";
    limpiar.textContent = "Limpiar";

    $form.appendChild(calcular);
    $form.appendChild(limpiar);

    calcular.onclick = function () {
        calcularTiempo();
        textoResultado.style.display = 'inline';
        return false;
    }

    limpiar.onclick = function () {
        textoResultado.style.display = 'none';
    }

}

function crearClases(clases) {
    const $form = document.querySelector("#clases");
    let numeroClase = 1;

    for (let i = 0; i < clases; i++) {

        const div = document.createElement("div");

        const labelClase = document.createElement('label');
        labelClase.textContent = `Clase ${numeroClase} : `;
        div.appendChild(labelClase);

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
        numeroClase++;
    }
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

    for (let i = 0; i < segundos.length; i++) {
        let cantidadSegundos = Number(segundos[i].value);
        acumuladorSegundos += cantidadSegundos;
    }

    for (let i = 0; i < minutos.length; i++) {
        let cantidadMinutos = Number(minutos[i].value);
        acumuladorMinutos += cantidadMinutos;
    }

    for (let i = 0; i < horas.length; i++) {
        let cantidadHoras = Number(horas[i].value);
        acumuladorHoras += cantidadHoras;
    }


    asignarTiempo(acumuladorHoras, acumuladorMinutos, acumuladorSegundos);
}

function asignarTiempo(horas, minutos, segundos) {

    let segundosAMinutos = 0, restoSegundos = 0;

    segundosAMinutos = Math.round(segundos / 60);
    restoSegundos = segundos % 60;

    minutos += segundosAMinutos;

    let minutosAHoras = 0, restoMinutos = 0;
    minutosAHoras = Math.round(minutos / 60);
    restoMinutos = minutos % 60;

    horas += minutosAHoras;

    mostrarResultado(horas, restoMinutos, restoSegundos);
}

function mostrarResultado(horas, minutos, segundos) {
    const mostrar = document.querySelector('strong');
    mostrar.innerText = `Las clases tienen una duracion de ${horas} horas, ${minutos} minutos, y ${segundos} segundos .`;
}
