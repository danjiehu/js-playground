// ref: 
// function takes in a location and returns a promise
function makeRequest(location) {
    return new Promise((resolve, reject) => {
        console.log(`Making Requst to ${location}`)
        if (location === "Google") {
            resolve("Google says hi")
        } else {
            reject("we can only talk to Google")
        }
    })
}

function processRequest(response) {
    return new Promise((resolve, reject) => {
        console.log("processing response")
        resolve(`extra information + ${response}`)
    })
}

// makeRequest("Google")
//     .then(res => {
//         console.log("response received")
//         return processRequest(res)
//     })
//     .then(processedRes => {
//         console.log(processedRes)
//     })
//     .catch(err => { console.log(err) })


// doing this same as above with async await 
// async await MUST be used in a function defintion, you can then call the function to do the work 
// await MUST be used to received the resolved object of a promise
async function doWork() {
    try {
        const response = await makeRequest("Facebook")
        console.log("response received")
        const processedResponse = await processRequest(response)
        console.log(processedResponse)
    }
    catch (err) {
        console.log(err)
    }
}

doWork();

