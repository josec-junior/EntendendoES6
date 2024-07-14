function quantidadePropriedadesEnumeraveis(objeto) {
    let contador = 0
    const propriedadesDescriptors = Object.getOwnPropertyDescriptors(objeto)
    for (let [chave,] of Object.entries(objeto)) {
        if (propriedadesDescriptors[chave].enumerable) {
            contador++
        }
    }
    return contador
}

console.log(quantidadePropriedadesEnumeraveis({nome: "Jão"}))