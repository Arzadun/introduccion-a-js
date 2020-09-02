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
    lista[i].textContent = Math.round(Math.random() * 10);
  }

}

agregarNumeros();

document.querySelector('button').onclick = function () {
  const lista = document.querySelectorAll('li');
  let listaNumeros = [];
  for (let i = 0; i < lista.length; i++) {
    listaNumeros.push(Number(lista[i].textContent));
  }

  mostrarResultados(numeroMenor(listaNumeros), numeroMayor(listaNumeros), promedio(listaNumeros));
}
function mostrarResultados(menor, mayor, promedio, ) {

  const numeroMenor = document.querySelector('#menor').textContent = `El menor número es ${menor} .`
  const numeroMayor = document.querySelector('#mayor').textContent = `El mayor número es ${mayor} .`
  const promedioNumeros = document.querySelector('#promedio').textContent = `El promedio es ${promedio} .`
  
}


































