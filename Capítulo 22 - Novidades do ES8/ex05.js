function tudoParaADireita(strings, tamanho) {
    strings.forEach(string => {
        console.log(string.padStart(tamanho))
    })
}

tudoParaADireita(["carro", "avião", "foguete", "helicóptero"], 11)