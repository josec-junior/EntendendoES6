function criaMacaroca(strings) {
    let novaString = ""
    for (let string of strings) {
        novaString = `${novaString}${string}`
    }
    return novaString
}

console.log(criaMacaroca(["a", "b", "c", "d"]))