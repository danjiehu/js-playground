// writing a promise object 

let p = new Promise((resolve, reject) => {
    let a = 1 + 1;
    if (a == 2) {
        resolve("success")
    } else {
        reject("failed")
    }
})

p
    .then((res) => {
        console.log("this is in the then: " + res)
    })
    .catch((rej) => {
        console.log("this is in the catch: " + rej)
    })