function mostraGradeProfessores(corpoDocente) {
    for (let aula of corpoDocente) {
        let [materia, hora, professor] = aula
        console.log(`Aula de ${materia} às ${hora} com professor(a) ${professor}`)
    }
}

const corpoDocente = [
    [ 'Gramática', '9:00', 'Sueli' ],
    [ 'Matemática', '10:15', 'Amilton'],
    [ 'Educação Física', '11:30', 'Bruno' ]
]

mostraGradeProfessores(corpoDocente)