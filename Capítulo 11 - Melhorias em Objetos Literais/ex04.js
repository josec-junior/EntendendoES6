function criaObjetoComCaracteristicas(caracteristicas) {
    const obj = {}
    for (caracteristica of caracteristicas) {
        let valor = caracteristica[1]
        obj[caracteristica[0]] = valor
    }
    return obj
}

caracteristicas = new Map()
caracteristicas.set("nome", "Júnior")
caracteristicas.set("idade", 21)

objeto = criaObjetoComCaracteristicas(caracteristicas)
console.log(objeto)