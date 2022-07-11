// connecting to a database, creating a client object
const Client = require('pg').Client;
// same as syntax: const {Client} = require('pg')

// create a client object
const client = new Client({
    user: "danjiehu",
    password: "",
    host: "localhost",
    port: 5432,
    database: "test"
})

client.connect()
    .then(() => console.log("connected successfully"))
    .catch(error => console.log)
    .finally(() => client.end())
// execute .then() if connection successful
// execute .catch() if connection fails
// execute .finally() to end connection with client.end()