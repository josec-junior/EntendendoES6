let Casa = {
    metrosQuadrados: 4000,
    altura: 3000,
    nQuartos: 4,
    nBanheiros: 2
  
    //...
}

for (let propriedade in Casa) {
    console.log(`${propriedade}: ${Casa[propriedade]}`)
}