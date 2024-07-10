const estados = [
    { codigo: 'OK', resposta: 'Sucesso' },
    { codigo: 'FAILED', resposta: 'Erro' },
    { codigo: 'PENDING', resposta: 'Pendente' }
]

let mensagem = '';
const codigoAtual = 'OK';

for (let i = 0; i < estados.length; i++) {
  if (estados[i].codigo === codigoAtual) {
    mensagem = estados[i].resposta;
  }
}

console.log(mensagem);