let equipe = {
    nome: "Valentes da Glória",
    membros: ["Luciano", "Maria", "Vírginia", "Daniela"],

    imprimeNomes: function() {
        this.membros.forEach(membro => console.log(`${membro} é um membro da equipe ${this.nome}.`))
    }
}

equipe.imprimeNomes()