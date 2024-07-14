function possuiNumero(texto, termo) {
    let achou = false;
    const termos = texto.split(' ');
    achou = termos.includes(termo)
    return achou;
}

console.log(possuiNumero('Era uma vez', 'vez')) // true
console.log(possuiNumero('Dois mais dois é quatro', 'mais')) // true
console.log(possuiNumero('Não há nada aqui', 'quadro')) // false