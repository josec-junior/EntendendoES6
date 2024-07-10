function validaParenteses(parenteses) {
    let arrayParenteses = parenteses.split("")
    let equilibrado = !arrayParenteses.reduce(function(soma, parentese) {
        if (soma < 0) {
            return soma
        }
        if (parentese === "(") {
            return ++soma
        }
        if (parentese === ")") {
            return --soma
        }
    }, 0)

    return equilibrado
}

console.log(validaParenteses("()()()"))