function calculaValorTotalDaCompra(produtos, cidade, caixa, fretes) {
    let compra = 0
    for (produto of produtos) {
        compra += caixa.get(produto)
    }
    let frete = 13.00
    if (fretes.has(cidade)) {
        frete = fretes.get(cidade)
    }
    compra += frete
    return compra
}

caixa = new Map()
caixa.set("Arroz", 7.10)
caixa.set("Feijão", 2.30)
caixa.set("Macarrão", 4.70)
caixa.set("Refrigerante", 3.00)

fretes = new Map()
fretes.set("São Paulo", 10.10)
fretes.set("Rio de Janeiro", 12.30)
fretes.set("Brasília", 14.70)
fretes.set("Outras", 13.00)

console.log(calculaValorTotalDaCompra(["Arroz"], "São Paulo", caixa, fretes))