function simulaPromise(sucesso = true, delay = 0) {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (sucesso) {
                resolve("Ok!")
            } else {
                reject("Not ok!")
            }
        }, delay)
    })
    promise.then((data) => {
        console.log(`Status OK: ${data}`)
    }).catch((data) => {
        console.log(`Status OK: ${data}`)
    })
}

let sucesso = true
simulaPromise(sucesso, 2000)
sucesso = false
simulaPromise(sucesso, 1000)