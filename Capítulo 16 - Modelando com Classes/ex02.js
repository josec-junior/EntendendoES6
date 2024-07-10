class VideoGame {
    constructor(marca, nControles, tipoMidia) {
        this.marca = marca
        this.nControles = nControles
        this.tipoMidia = tipoMidia
    }
}

class Playstation extends VideoGame {
    constructor(marca, nControles, tipoMidia, nEntradasUSB, voltagem, adicionais) {
        super(marca, nControles, tipoMidia)
        this.nEntradasUSB = nEntradasUSB
        this.voltagem = voltagem
        this.adicionais = adicionais
    }
}

let playstation5 = new Playstation("Sony", 2, "Blu-ray", 4, 120, ["Volante", "Headset"])
console.log(playstation5)