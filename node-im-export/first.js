// ref: https://m.youtube.com/watch?v=hyYbs3SANRo
// var addFn = require('./add.js'); // this is going to return only the export part of add.js
var operatorsObj = require('./add.js')

function greet(name) {
    console.log("hello! ", name)
}

greet("alex");

// this is imported from add.js file 
// addFn(10, 20);

operatorsObj.add(10, 20);
operatorsObj.subtract(230, 30);