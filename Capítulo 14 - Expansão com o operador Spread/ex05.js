function realizaBrainstorm(time) {
    console.log(time)
}

const equipeMarketing = ['Joana', 'Marcela', 'Bruna'];
const equipeComercial = ['Talita', 'Luisa', 'Vitória'];

const timeCompleto = [...equipeMarketing, ...equipeComercial];

realizaBrainstorm(timeCompleto);