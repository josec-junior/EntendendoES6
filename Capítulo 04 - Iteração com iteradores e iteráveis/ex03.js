function soletraPalavra(palavra) {
    let iterador = palavra[Symbol.iterator]()
    let proxima = iterador.next()
    do {
        console.log(proxima.value)
        proxima = iterador.next()
    } while (!proxima.done)
}

palavra = "EcmaScript"
soletraPalavra(palavra)