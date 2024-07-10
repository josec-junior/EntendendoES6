function percorreRuas(ruas, ruaDeParada) {
    for (let rua of ruas) {
        console.log(`${rua} `)
        if (rua === ruaDeParada) {
            break
        }
    }
}

ruas = ["Rua 1", "Rua 2", "Rua 3", "Rua 4", "Rua 5"]
percorreRuas(ruas, "Rua 2")
