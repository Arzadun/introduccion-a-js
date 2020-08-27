//TAREA: En otro archivo html (no Index) y otro archivo js (no tarea-clase-5.js),
// creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario
// también vamos a crear un <h1> que diga Bienvenido!
// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!

const form = document.querySelector('form');
const nombreUsuario = document.querySelector('#nombre-usuario');
const apellidoUsuario = document.querySelector('#apellido-usuario');
const edadUsuario = document.querySelector('#edad-usuario');
const resultado = document.createElement('p');
const $saludo = document.querySelector("h1");
const calcular = document.querySelector('button');
const bienvenida = $saludo.innerText

calcular.onclick = function () {
    $saludo.innerText = personalizarSaludo(nombreUsuario);
    mostrarResultado(nombreUsuario, apellidoUsuario, edadUsuario);


    calcular.disabled = true;
}


function personalizarSaludo(nombre) {
    let saludo = bienvenida;

    if (nombre.value === "") {
        return $saludo.innerText;
    } else {
        let saludoPersonalizado = `${saludo}, ${nombre.value} !`;
        return $saludo.innerText = saludoPersonalizado;
    }
}

function mostrarResultado(nombre, apellido, edad) {
    form.appendChild(resultado);
    return resultado.innerText = `Tu nombre es ${nombre.value} ${apellido.value} y tienes ${edad.value} de edad.`;
}

