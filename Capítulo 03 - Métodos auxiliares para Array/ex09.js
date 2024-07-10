function calculaRaizesQuadradas(numeros) {
    return numeros.map(function (numero) {
        return Math.sqrt(numero) 
    })
}

numeros = [4, 9, 16, 25, 36, 49, 64, 81, 100]
console.log(calculaRaizesQuadradas(numeros))