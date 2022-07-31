// ref: https://m.youtube.com/watch?v=0JNq46eFuOM&t=11s

let { client } = require('./client.js'); // connect to postgres database
const express = require('express'); // import express library
const app = express(); // creat an express app

// ! start of execution block
start();

// ! start of testing block
// client.connect()
//     .then(() => console.log("connected successfully"))
//     .then(() => client.query("select id, text from todos"))
//     .then(results => console.table(results.rows))
//     // rows is an array of query results, each row is an object with value key pairs
//     .catch(error => console.log(error))
//     .finally(() => client.end())

// ! start of function definition block
// async await MUST be used in a function defintion, you can then call the function to do the work 
// await MUST be used to received the resolved object of a promise
async function start() {
    await connect();
    const todos = await readTodos();
    console.log(todos);

    const successCreate = await createTodo("go to trader joes");
    console.log(`creating was ${successCreate}`)

    const successDelete = await deleteTodo(1);
    console.log(`deleting was ${successDelete}`)
}

async function connect() {
    try {
        await client.connect();
    }
    catch (err) {
        console.error(`failed to connect ${err}`)
    }
}

// readTodos intake no parameters
// readTodos reads all the content from todos table, returns results.rows object if read success; returns empty array if read fails
async function readTodos() {
    try {
        const results = await client.query("select id, text from todos");
        return results.rows; // rows is an array of objects
    }
    catch (e) {
        return []; // if failed, return an empty array
    }
}

// intake todoText
// return true when createTodo is successful and return false when createTodo fails 
async function createTodo(todoText) {
    try {
        await client.query("insert into todos(text) values($1)", [todoText]);
        return true;
    }
    catch (e) {
        return false; // catching error in the try block
    }
}

// intake delete item's id
// return true if delete successful, false if delete failed
async function deleteTodo(id) {
    try {
        await client.query("delete from todos where id = $1", [id]);
        return true;
    }
    catch (e) { return false; }
}

// end of function definition block