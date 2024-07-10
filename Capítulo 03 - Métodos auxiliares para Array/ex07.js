function buscar(propriedade, valor, lista) {
    return lista.find(function (registro) {
        return registro[propriedade] === valor
    })
}

pessoas = [
    {nome: 'Tânia', sobrenome: 'Cardoso', idade: 65},
    {nome: 'Emilly', sobrenome: 'Barbosa', idade: 46},
    {nome: 'Vitória', sobrenome: 'Costa', idade: 83},
    {nome: 'Erick', sobrenome: 'Ferreira', idade: 16}
]

console.log(buscar("nome", "Tânia", pessoas))