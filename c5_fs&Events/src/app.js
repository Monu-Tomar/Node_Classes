// console.log("All about files and events");
// 1. File System
const fs = require("fs");
// const fs = require("fs").promises; // for async/await

const res = fs.readFileSync("./src/data.txt", "utf-8");
console.log(res);

// const res2 = fs.readFile("./src/data.txt", "utf-8", (err, data) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log(data);
// });
// console.log(res2); // undefined because readFile is async and returns immediately




// const path = require("path");
// const { readFile, writeFile } = require("fs").promises;
// const { readFileSync, writeFileSync } = require("fs");
// const { readFile, writeFile } = require("fs").promises;
// const { readFileSync, writeFileSync } = require("fs");



// something went wrong so I am trying to fix it and update the code, later I will delete this comment