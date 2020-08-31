function numeroMenor(array) {
    let minimo = [100]
    for (let i = 0; i < array.length; i++) {
        if (array[i] < minimo) {
            minimo = array[i]
        }

    }
    return minimo;
}

function numeroMayor(array) {
    let mayor = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] > mayor) {
            mayor = array[i]
        }

    }
    return mayor;
}

function promedio(array) {
    let acumulador = 0, promedio = 0;
    for (let i = 0; i < array.length; i++) {
        acumulador += array[i]

    }
    return promedio = Math.round(acumulador / array.length);
}

function numeroFrecuente(numeros) {
    let contador = 0, numeroFrecuente = 0;
    for (let i = 0; i < numeros.length; i++) {

        for (let j = 0; j < numeros.length; j++) {
            if (numeros[i] === numeros[j]) {
                numeroRepetido = numeros[i]
                contador++;
            }
        }
    }

}