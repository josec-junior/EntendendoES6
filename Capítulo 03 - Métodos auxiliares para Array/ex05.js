function removeDuplicatas(numeros) {
    return numeros.reduce(function (numerosSemDuplica, numero) {
        let encontrouDuplicata = numerosSemDuplica.find(function (numero2) {
            return numero === numero2
        })

        if (!encontrouDuplicata) {
            numerosSemDuplica.push(numero)
        }

        return numerosSemDuplica
    }, [])
}

lista = [1, 2, 3, 4, 5, 6, 7, 6, 6, 8, 9, 8]
console.log(removeDuplicatas(lista))