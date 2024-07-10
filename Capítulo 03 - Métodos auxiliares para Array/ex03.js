function caps(array) {
    return arrayCapsLock = array.map(function (string) {
        return string.toUpperCase()
    })
}

palavras = ["oi", "tudo", "bem?", "sim", "e", "você?"]
console.log(caps(palavras))