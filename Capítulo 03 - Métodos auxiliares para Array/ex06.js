function aprovados(lista, media = 7.0) {
    return lista.filter(function (aluno) {
        return aluno.media >= media
    })
}

alunos = [
    {nome: "Diogo", media: 5.5},
    {nome: "Júlia", media: 9.5},
    {nome: "Roberto", media: 1.5},
    {nome: "Tiago", media: 6.0},
]

console.log(aprovados(alunos, 7.0))