function todosSaoMaioresQue(referencia, ...numeros) {
    return numeros.every((numero) => {
       return numero > referencia 
    })
}

console.log(todosSaoMaioresQue(1, 2))