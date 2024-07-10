function calculaDistancia(ruas) {
    let iterador = ruas[Symbol.iterator]()
    let proxima = iterador.next()
    let distancia = 0
    do {
        distancia += proxima.value.tamanho
        proxima = iterador.next()
    } while (!proxima.done)
    return distancia
}

let ruas = [
    {nome:'Rua 1', tamanho: 2500},
    {nome:'Rua 2', tamanho: 3400},
    {nome:'Rua 3', tamanho: 1400}
]

console.log(`Distância: ${calculaDistancia(ruas)}m`)