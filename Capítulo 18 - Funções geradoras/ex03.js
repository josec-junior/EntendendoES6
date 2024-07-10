function* correBolt() {
    console.log("Usain passou no checkpoint 1")
    yield "Checkpoint 1"
    console.log("Usain passou no checkpoint 2")
    yield "Checkpoint 2"
    console.log("Usain passou no checkpoint 3")
    yield "Checkpoint 3"
    console.log("Usain passou no Checkpoint 4")
    yield "Checkpoint 4"
}

const corrida = correBolt()
for (corre of corrida) {
    console.log(corre)
}