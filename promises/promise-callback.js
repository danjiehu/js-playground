// promise is meant to replace callbacks, here's an example

// // 1 - synchronous callback - start
// function greeting(name) {
//     alert("hello" + name);
// }

// // this function gets user input and by passing in different function, user input will be processed differently
// function processUserInput(callback) {
//     const name = prompt("Please enter your name.");
//     callback(name);
// }

// processUserInput(alert);
// // 1 - synchronous callback - end

// 2 - callback example - start
const userLeft = false;
const userWatchingCatMeme = true;

// function watchTutorialCallBack(callback, errorCallback) {
//     if (userLeft) {
//         // if userLeft is true, call errorCallback function with the following object input
//         errorCallback({
//             name: "user left",
//             message: ":("
//         })
//     } else if (userWatchingCatMeme) {
//         // if userWatchingCatMeme is true, call errorCallback function with the following object input
//         errorCallback({
//             name: "user watching cat meme",
//             message: "tutorial < Cat"
//         })
//     } else {
//         // if neither are true, user is watching tutorial, call callback function with "thumbs up" input
//         callback("thumbs up");
//     }
// }

// // function printSuccess(message) {
// //     console.log("success: " + message)
// // }

// // function printError(error) {
// //     console.log(error.name + " " + error.message)
// // }

// // watchTutorialCallBack(printSuccess, printError);

// watchTutorialCallBack((message) => {
//     console.log("success: " + message)
// }, (error) => {
//     console.log(error.name + " " + error.message)
// })
// 2 - callback example - end


// 3 - replacing callback example above with promise - start
// a promise function is called with no parameters, it either gets resolved or rejected
function watchTutorialPromise() {
    return new Promise((resolve, reject) => {
        if (userLeft) {
            reject({
                name: "user left",
                message: ":("
            })
        } else if (userWatchingCatMeme) {
            reject({
                name: "user watching cat meme",
                message: "tutorial < cat"
            })
        } else { resolve("thumbs up") }
    })
}

// calling a promise
watchTutorialPromise().then(message => {
    console.log("success: " + message);
}).catch(error => {
    console.log(error.name + " " + error.message);
})
// 3 - replacing callback example above with promise - end
