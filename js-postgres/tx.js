// A transaction is a logical unit of work that contains one or more SQL statements. A transaction is an atomic unit. The effects of all the SQL statements in a transaction can be either all committed (applied to the database) or all rolled back (undone from the database).
// ref: https://node-postgres.com/features/queries
// ref: https://www.youtube.com/watch?v=ufdHsFClAk0

const { Client } = require('pg');

const client = new Client({
    user: "danjiehu",
    password: "",
    host: "localhost",
    port: 5432,
    database: "test"
})

execute();

async function execute() {
    try {

        await client.connect()
        await client.query("BEGIN")
        await client.query("insert into person (first_name, last_name, gender, email, date_of_birth, country_of_birth) values($1, $2, $3, $4, $5, $6)", ['Fernanda', 'Beardon', 'Female', 'test@is.gd', '1953-10-28', 'Finland'])
        console.log("inserted a new row")
        // if you don't commit, the insertion will not add to the database - this is good because if anything goes bad, you can rollback
        await client.query("COMMIT")

    }
    catch (ex) {
        console.log(`failed to execute something ${ex}`)
        await client.query("ROLLBACK")
    }
    finally {
        await client.end()
        console.log("connection end.")
    }

}