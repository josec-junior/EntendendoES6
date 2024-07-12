class Compras {
    constructor(itens, valorAPagar, valorPago) {
        this.itens = itens;
        this.valorAPagar = valorAPagar;
        this.valorPago = valorPago;
    }
}

const validador = {
    set(Compras, propriedade, valor) {
        let valorAPagar = Compras["valorAPagar"]
        if (propriedade === "valorPago" && valor < valorAPagar) {
            throw new Error('Valor insuficiente para pagar!');
        }
        Compras[propriedade] = valor;
    }
}

const compra = new Proxy({}, validador)
compra.valorAPagar = 350
compra.valorPago = 349