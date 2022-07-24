// to execute this file: npm run asyncFullTable
const { Client } = require('pg');
const client = new Client({
    user: "danjiehu",
    password: "",
    host: "localhost",
    port: 5432,
    database: "test"
})

execute();

// for async function, you will pause the execution before you move to the next line of code
async function execute() {

    try {
        await client.connect();
        // once this line is executed, then execute the next line of code "the console log success"
        console.log("Connected successfully.")
        // the following line is to test catch error: null value in column "last_name" of relation "person" violates not-null constraint
        // await client.query("insert into person values (1,'Fernanda')")

        const results = await client.query("select * from person");
        console.table(results.rows);

        // {rows}: give me the property "rows" of the result of the await function and store it in a variable called "rows"
        const { rows } = await client.query("select * from person");
        console.table(rows);
    }

    catch (ex) {
        // catching errors
        console.log(`something went wrong ${ex}`)
    }

    finally {
        await client.end();
        console.log("client disconnected successfully.")
    }

}