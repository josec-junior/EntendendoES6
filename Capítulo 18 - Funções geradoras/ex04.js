function* capturarPokemons() {
    yield "Pikachu"
    yield "Charmander"
    yield "Caterpie"
}

const pkms = capturarPokemons()
for (let pkm of pkms) {
    console.log(`Capturou o Pokémon ${pkm}`)
}