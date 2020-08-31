//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."


function agregarNumeros() {
  const lista = document.querySelectorAll('li');

  for (let i = 0; i < lista.length; i++) {
    lista[i].textContent = Math.round(Math.random() * 100);
  }

}

agregarNumeros();

document.querySelector('button').onclick = function () {
  const lista = document.querySelectorAll('li');
  let arrayDeNumeros = [];
  for (let i = 0; i < lista.length; i++) {
    arrayDeNumeros.push(Number(lista[i].textContent));
  }
  console.log(promedio(arrayDeNumeros));
}

function mostrarResultados(menor,mayor,promedio,frecuente){ 
  
  document.querySelector
}


































