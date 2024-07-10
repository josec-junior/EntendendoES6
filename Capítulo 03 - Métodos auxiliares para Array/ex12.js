function existeProdutosDatados(produtos, dataReferencia) {
    dataReferencia = new Date(dataReferencia)
    let produtoDatado = produtos.some(function (produto) {
        produto.dataValidade = new Date(produto.dataValidade)
        return produto.dataValidade < dataReferencia
    })
    return produtoDatado
}

let produtos = [
    {nome:"Cereal", preco:"10", dataValidade:"21/02/2017"},
    {nome:"Suco de Abacaxi", preco:"12", dataValidade:"01/01/2017"},
    {nome:"Torta de frango", preco:"25", dataValidade:"07/07/2017"}
]

console.log(existeProdutosDatados(produtos, "2016-01-01"))