function somenteValores(objeto) {
    for (let valor of Object.values(objeto)) {
        console.log(valor)
    }
}

let pessoa = {
    nome: "João Bobão",
    rua: "Oscar Freire",
    idade: 25
}

somenteValores(pessoa)