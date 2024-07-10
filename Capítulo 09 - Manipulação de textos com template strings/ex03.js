function montaEnderecoCompleto(rua, cidade, numero, cep) {
    let endereco = `${rua}, ${numero} - ${cidade}, ${cep}`
    return endereco
}

let rua = "Rua Riachuelo"
let cidade = "São Paulo - SP"
let numero = 148
let cep = "01005-010"
console.log(montaEnderecoCompleto(rua, cidade, numero, cep))