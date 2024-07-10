function clonaObjeto(objeto) {
    propriedades = Object.getOwnPropertyNames(objeto)
    novoObjeto = {}
    propriedades.forEach(function (propriedade) {
        novoObjeto[propriedade] = objeto[propriedade]
    })
    return novoObjeto
}

pessoa = {
    nome: "João",
    idade: 22,
    ocupacao: "Estudante"
}

console.log(clonaObjeto(pessoa))