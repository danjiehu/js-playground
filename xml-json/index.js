let convert = require('xml-js');
let xml = require('fs').readFileSync('example-1.xml', 'utf-8')

let result = convert.xml2json(xml, { compact: true, spaces: 4 });
console.log(result);