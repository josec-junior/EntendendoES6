function percorreRuas(ruas, ruaPerigosa) {
    for (let rua of ruas) {
        if (rua === ruaPerigosa) {
            continue
        }
        console.log(`${rua} `)
    }
}

ruas = ["Rua do Fullstack", "Rua do Mobile", "Rua da Web", "Rua do Front-End", "Rua do Back-End", "Rua de Testes"]
percorreRuas(ruas, "Rua do Front-End")