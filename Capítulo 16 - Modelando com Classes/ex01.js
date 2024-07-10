class VideoGame {
    constructor(marca, nControles, tipoMidia) {
        this.marca = marca
        this.nControles = nControles
        this.tipoMidia = tipoMidia
    }
}
  
let playstation = new VideoGame("Sony", 2, "DVD")
console.log(playstation)
// { marca: 'sony', nControles: '2', tipoMidia: 'dvd' }