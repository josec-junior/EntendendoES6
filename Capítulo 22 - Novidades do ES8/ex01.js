function mapeiaObjeto(objeto) {
    let map = new Map(Object.entries(objeto))
    return map
}

const mapa = mapeiaObjeto({nome: "João Bobão"})
console.log(mapa.get("nome"))