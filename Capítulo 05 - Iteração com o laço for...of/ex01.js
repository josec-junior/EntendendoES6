function somaFaturamento(numeros) {
    let soma = 0
    for (let numero of numeros) {
        soma += numero
    }
    return soma
}

numeros = [1, 2, 3, 4]
console.log(somaFaturamento(numeros))