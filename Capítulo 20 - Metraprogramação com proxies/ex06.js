class PaolaBracho {
    constructor(dinheiro, marido) {
        this.dinheiro = 10000000;
        this.marido = 'Carlos Daniel Bracho';
    }
}

const usurpadora = {
    get(PaolaBracho, propriedade) {
        if(propriedade === 'dinheiro' || propriedade === 'marido') {
            console.log('A Usurpadora está atacando!');
        }
    }
}

const {proxy: paola, revoke} = Proxy.revocable({}, usurpadora);
paola.dinheiro
revoke()
paola.marido