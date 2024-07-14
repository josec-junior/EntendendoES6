function tudoParaAEsquerda(strings, tamanho) {
    strings.forEach(string => {
        console.log(string.padEnd(tamanho, "-"))
    })
}

tudoParaAEsquerda(["carro", "avião", "foguete", "helicóptero"], 11)