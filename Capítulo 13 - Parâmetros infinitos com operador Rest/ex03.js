function anunciaBolasSorteadas(...bolas) {
    for(bola of bolas) {
        console.log(`A bola escolhida foi ${bola}`);
    }
}

anunciaBolasSorteadas(1,2,3);
// saída
// A bola escolhida foi: 1
// A bola escolhida foi: 2
// A bola escolhida foi: 3