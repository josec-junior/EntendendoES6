function doSomethingPromise() {
    return new Promise((resolve) => {
        resolve(console.log("I did something")) 
    })
}

async function doSomething() {
    await doSomethingPromise()
    console.log('I did something AFTER!');
}

doSomething()