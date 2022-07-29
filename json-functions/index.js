//ref: 

let fs = require('fs');

// step-1: reading json file 
const demo = fs.readFileSync('/Users/danjiehu/code/js-playground/json-functions/demo.json', 'utf-8');
console.log("type of demo: ", typeof demo); // output: string
// ! demo is a string

// step-2: converting demo(string type) into javascript object 
const demoObj = JSON.parse(demo);
console.log("demoObj: ", demoObj);
console.log("type of sanctionEntity: ", typeof demoObj.export.sanctionEntity);
console.log("sanctionEntity: ", demoObj.export.sanctionEntity[0]);
demoObj.export.sanctionEntity.forEach(element => {
    console.log(element.euReferenceNumber);
});

