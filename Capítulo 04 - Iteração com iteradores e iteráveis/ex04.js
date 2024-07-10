function criaIterador(lista) {
    let proximoIndice = 0

    return  { 
        next: function() {
            if (proximoIndice < lista.length) {
                return {value: lista[proximoIndice++], done: false}
            } else {
                return {value: undefined, done: true}
            }
        }
    }
}

let array = [1, 2]
let iterador = criaIterador(array)
console.log(iterador.next())
console.log(iterador.next())
console.log(iterador.next())