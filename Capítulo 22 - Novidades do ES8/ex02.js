function detalhaObjeto(objeto) {
    for (let [chave,valor] of Object.entries(objeto)) {
        console.log(`${chave}: ${valor}`)
    }
}

detalhaObjeto({
    nome: "João Bobão",
    rua: "Oscar Freire"
})