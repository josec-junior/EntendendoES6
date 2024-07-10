function removeDuplicatas(numeros) {
    let set = new Set(numeros)
    return set
}

numeros = [1, 1, 2, 2, 3, 3]
console.log(removeDuplicatas(numeros))