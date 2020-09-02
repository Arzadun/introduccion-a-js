
function numeroMenor(numeros) {
    let minimo = [100]
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] < minimo) {
            minimo = numeros[i]
        }
    }
    return minimo;
}

function numeroMayor(numeros) {
    let mayor = 0
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > mayor) {
            mayor = numeros[i]
        }
    }
    return mayor;
}

function promedio(numeros) {
    let acumulador = 0, promedio = 0;
    for (let i = 0; i < numeros.length; i++) {
        acumulador += numeros[i];
    }
    return promedio = Math.round(acumulador / numeros.length);
}

