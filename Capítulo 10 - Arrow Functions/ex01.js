let imprimeProduto = (nome, preco) => {
    console.log(`Produto: ${nome} | Preço: ${preco} R$`)
}

let carrinho = [
    { nome: 'Abacaxi', preco: '2.00' },
    { nome: 'Detergente', preco: '2.50' },
    { nome: 'Bolacha', preco: '3.80' }
]

carrinho.forEach((produto) => {
    imprimeProduto(produto.nome, produto.preco)
})