function calculaPrecoTotal(...precos) {
    return precos.reduce(function(total, preco) {
      return total + preco;
    }, 0)
}

console.log(calculaPrecoTotal(1,2,3,4,5)) // 15