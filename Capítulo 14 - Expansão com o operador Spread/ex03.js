function contaQuantidadeVogaisNaoAcentuadas(...palavras) {
    let quantidadeVogais = 0
    let palavrasMinusculas = palavras.map((palavra) => {
        return palavra.toLowerCase()
    })
    for (let palavra of palavrasMinusculas) {
        const letras = [...palavra]
        for (let letra of letras) {
            if ("aeiou".indexOf(letra) != -1) {
                quantidadeVogais += 1
            }
        }
    }
    return quantidadeVogais
}

console.log(contaQuantidadeVogaisNaoAcentuadas("ES6", "JavaScript", "EcmaScript"))