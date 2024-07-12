function simulaPromise(sucesso = true) {
    let promise = new Promise((resolve, reject) => {
        if (sucesso) {
            resolve("Ok!")
        } else {
            reject("Not ok!")
        }
    })
    promise.then((data) => {
        console.log(`Status OK: ${data}`)
    }).catch((data) => {
        console.log(`Status OK: ${data}`)
    })
}

let sucesso = true
simulaPromise()
simulaPromise(sucesso)
sucesso = false
simulaPromise(sucesso)