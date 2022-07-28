// demostrating the use of Promise.all and Promise.race
// Promise.all run all three promises at the same time, and resolve when all three are resolved
// Promise.race run all three promises at the same time, and resolve when the fast one is resolved
// the point of promise all is to run all three promises at the same time and not have to wait for one promise to resolve to run the next

const recordVideoOne = new Promise((resolve, reject) => {
    resolve("video 1 recroded")
})

const recordVideoTwo = new Promise((resolve, reject) => {
    resolve("video 2 recorded")
})

const recordVideoThree = new Promise((resolve, reject) => {
    resolve("video 3 recorded")
})

Promise.all([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((message) => {
    console.log("promise all res: ", message)
})

Promise.race([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((message) => {
    console.log("promise race res: ", message)
})