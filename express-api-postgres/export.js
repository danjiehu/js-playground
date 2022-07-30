// const Client = require('pg').Client;

// const client = new Client({
//     "user": "danjiehu",
//     "password": "",
//     "host": "danjiehu",
//     "port": 5432,
//     "database": test
// })

// export { client };

function test() { console.log("export module success"); }
export * from 'export.js'