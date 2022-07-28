// before this, in terminal:
// npm init
// package namae, entry point, test command (executing the code): node index.js
// repo, author, license

// connecting to a database, creating a client object
const Client = require('pg').Client;
// same as syntax: const {Client} = require('pg')

// create a Client json object
const client = new Client({
    user: "danjiehu",
    password: "",
    host: "localhost",
    port: 5432,
    database: "test"
})

client.connect()
    .then(() => console.log("connected successfully"))
    .then(() => client.query("select * from person where first_name = $1", ["Omar"]))
    .then(results => console.table(results.rows))
    .catch(error => console.log(e))
    .finally(() => client.end())
// execute .then() if connection successful
// execute .catch() if connection fails
// execute .finally() to end connection with client.end()