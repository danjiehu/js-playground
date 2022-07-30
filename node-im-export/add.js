// node addes this: let exprots = modules.exports
// node tutorials, docker tutorials: https://m.youtube.com/c/JavaBrainsChannel/playlists
// ! use module.exports all the time, don't shorten it

function add(a, b) {
    console.log(a + b);
    return a + b;
}

function subtract(a, b) {
    console.log(a - b);
    return a - b;
}

console.log("whatever else");

// module.exports = add;

// exporting an object for multiple functions
// module.exports = {
//     add, // equals to add: add
//     subtract // equals to subtract: subtract
// }

// the recommended way of exporting multiple functions
module.exports.add = add;
// same as: exports.add = add;
// same as:
// export.add = (a, b) => a + b;

module.exports.subtract = subtract;

