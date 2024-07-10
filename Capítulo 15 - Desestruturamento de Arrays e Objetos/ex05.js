const profissional = {
    titulo: 'Engenheiro de Software',
    departamento: 'Engenharia'
}

function isEngenheiro(profissional) {
    const {titulo, departamento} = profissional
    return titulo.indexOf("Engenheiro") > -1 && departamento === 'Engenharia';
}

console.log(isEngenheiro(profissional)) // true
profissional.titulo = 'Marketing'
console.log(isEngenheiro(profissional)) // false