function isListaVazia(lista) {
    let iterador = lista[Symbol.iterator]()
    let proxima = iterador.next()
    return proxima.done
}

console.log(isListaVazia([]))