// trying out xml-js and xml packages 
// ref: https://nodejs.dev/learn/the-nodejs-fs-module

// xml-js ref: https://www.npmjs.com/package/xml-js // npm install xml-js
// xml2json ref: https://www.npmjs.com/package/xml2json // npm install xml2json

const fs = require('fs');
let parserOne = require('xml-js'); // xml-js parser 
let xml = require('fs').readFileSync('/Users/danjiehu/code/js-playground/xml-json/example.xml', 'utf-8');
let resultOne = parserOne.xml2json(xml, { compact: true, spaces: 4 });
fs.writeFileSync('/Users/danjiehu/code/js-playground/xml-json/xml-js-result.json', resultOne);
// console.log("resultOne: ", resultOne);

let parserTwo = require('xml2json');
let resultTwo = parserTwo.toJson(xml);
fs.writeFileSync('/Users/danjiehu/code/js-playground/xml-json/xml2json-result.json', resultTwo);
// console.log("resultTwo: ", resultTwo);

// put result to browser for easier reading
