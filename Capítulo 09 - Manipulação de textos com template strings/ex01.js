function tag(strings, ...values) {
    let itens = values[0].split(",")
    let listaItens = itens.map(function (item) {
        return ` <li> ${item} </li>`
    }).join("")
    return `<ul>${listaItens} </ul>`
}

const compras = 'leite,feijão,arroz,mandioca';
let elemento = tag`${compras}`;

console.log(elemento)
// <ul><li>leite<li><li>feijão<li><li>arroz<li><li>mandioca<li></ul>