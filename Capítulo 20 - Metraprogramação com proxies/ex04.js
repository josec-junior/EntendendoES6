class Livro {
    constructor(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
    }
}

livro = new Livro("ECMAScript 6 - Entre de cabeça no futuro do JavaScript", "Diego Martins de Pinho")

const proxy = new Proxy(livro, {
    get(alvo, propriedade) {
        console.log(`Propriedade ${propriedade} foi acessada!`)
        return alvo[propriedade]
    },

    set(alvo, propriedade, novoValor) {
        console.log(`Propriedade ${propriedade} foi alterada!`)
        alvo[propriedade] = novoValor
    }
})

proxy.titulo = "Use a Cabeça! Padrões de Projetos"
proxy.autor = "Eric Freeman e Kathy Sierra"