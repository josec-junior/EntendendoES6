function deletaAmigos(amigos, exAmigos) {
    for (let exAmigo of exAmigos) {
        if (amigos.has(exAmigo)) {
            amigos.delete(exAmigo)
            console.log(`${exAmigo} foi deletado!`)
        } else {
            console.log(`${exAmigo} não é seu amigo!`)
        }
    }
}

let amigos = new Map()
amigos.set("João Silva", {idade: 23, sexo: "Masculino"})
amigos.set("Luisa Pimenta", {idade: 18, sexo: "Feminino"})
amigos.set("Julio Marinho", {idade: 52, sexo: "Masculino"})
amigos.set("Marcela Mel", {idade: 27, sexo: "Feminino"})

console.log(amigos)
deletaAmigos(amigos, ["Julio Marinho", "João Bezerra"])
console.log(amigos)