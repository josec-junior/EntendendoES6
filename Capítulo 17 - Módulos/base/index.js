import nome, {chave, url as link} from "./src/config"
import {Telefone} from "./src/classe"
import printNoConsole from "./src/printer"


console.log(nome)

console.log(`Chave: ${chave}`)

const tel = new Telefone("Galaxy A55", 8228771465)
console.log(`Modelo: ${tel.modelo} - Número: ${tel.numero}`)

console.log(`Link: ${link}`)

let string = "ECMAScript 6"
printNoConsole(string)