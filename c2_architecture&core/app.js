//  # Node Architecture & Core
// Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.

console.log('Hello, Node.js!'); // Hello, Node.js!

// console.log("File path: ",__filename); // Current file name (e.g., app.js)
// console.log("Folder path: ",__dirname); // Current directory name (e.g., /path/to/your/directory)

// console.log(process.versions.node);


// const zlib = require('zlib');

// const input = 'Hello, this is a compressed string!';
// zlib.gzip(input, (err, buffer) => {
//   if (!err) {
//     console.log('Compressed:', buffer.toString('base64'));
//   }
// });

// const emoji = 'love you! ';
// console.log(/\p{Emoji}/u.test(emoji)); // true

// const s1 = 'é'; // composed
// const s2 = 'e\u0301'; // decomposed (e + accent)
// console.log(s1 === s2); // false
// console.log(s1.normalize() === s2.normalize()); // true



// console.log('e\u0301'.normalize() );

// console.log('abc'.padStart(18, true));
// console.log('abc'.padEnd(18, true)); // 'abc' + 15 spaces
// console.log('abc'.padStart(18, '0')); // '000000000000000abc'
// const { log } = require('console');

// const { error, log } = require('console');
const os= require('os');

// error(os.cpus()); // CPU information
// log(os.cpus()); // CPU information


// console.log(os); // Operating system information
// console.log(os.cpus()); // CPU information
// console.log(os.arch()); // CPU architecture (x64, arm64, etc.)
// console.log(os.platform()); // Operating system platform (win32, linux, etc.)
// console.log(os.networkInterfaces()); // Network interfaces information
// console.log(os.hostname()); // Hostname of the operating system
// console.log(os.machine()); // Machine architecture (x86, x64, etc.)
console.log(os.userInfo()); // User information (username, home directory, etc.)
// console.log(os.uptime()); // Uptime of the operating system in seconds


// error('This is an error message!');

// console.log(process.arch); // CPU architecture (x64, arm64, etc.)
// console.log(process.platform); // Operating system platform (win32, linux, etc.)

// console.log(process.pid); // Process ID (like 4668 changes every time).
// console.log(process.memoryUsage()); // Memory usage information

// console.log(process.uptime()); // Uptime of the process in seconds
// console.log(process.env); // Environment variables
// console.log(process.cwd()); // Current working directory

// console.log(process.execPath); // Path to the Node.js executable
// console.log(process.versions.zlib);
// console.log(process.platform); // Operating system platform

// console.log(process); // Process object
// console.log(process.memoryUsage()); // Memory usage information


// console.log(process.uptime()); // Uptime of the process in seconds



// About simdutf in Node.js
// simdutf is a high-performance UTF-8 validation and conversion library that uses SIMD (Single Instruction, Multiple Data) instructions to process text much faster than traditional methods. It was originally written in C++ (by Daniel Lemire and collaborators) and is known for being one of the fastest UTF-8 libraries.

// In the Node.js ecosystem, simdutf is typically exposed via a native addon, meaning it's a wrapper around the C++ implementation that can be used in JavaScript.

// Example usage of simdutf in Node.js:
// const simdutf = require('simdutf');

// // Validate UTF-8
// const buffer = Buffer.from('Hello, world!', 'utf-8');
// console.log(simdutf.validate_utf8(buffer)); // true

// // Count code points
// console.log(simdutf.count_utf8(buffer)); // 13 (each character is 1 byte in this case)
// console.log(simdutf.count_utf8(buffer, 0, buffer.length)); // 13
// console.log(simdutf.count_utf8(buffer, 0, buffer.length, true)); // 13 (with flag)

// ======================================= 

// something about sqlite3

// ⚙️ Why use SQLite in Node.js?
// Simple to set up (just a file)

// Great for small apps, prototyping, or local development

// No need to manage a server

// Fast for many use cases

// Works well with Electron, desktop apps, CLIs, or small web apps

// Example of using SQLite in Node.js:
// const Database = require('better-sqlite3');

// // Create or open a database file
// const db = new Database('mydb.sqlite');

// // Create a table
// db.exec(`
//   CREATE TABLE IF NOT EXISTS users (
//     id INTEGER PRIMARY KEY,
//     name TEXT,
//     email TEXT
//   )
// `);

// // Insert data
// const insert = db.prepare('INSERT INTO users (name, email) VALUES (?, ?)');
// insert.run('Alice', 'alice@example.com');

// // Query data
// const row = db.prepare('SELECT * FROM users WHERE name = ?').get('Alice');
// console.log(row); // { id: 1, name: 'Alice', email: 'alice@example.com' }


// 🧠 Key Concepts
// prepare() creates a reusable statement (prevents SQL injection).
// .get() gets a single row.
// .all() gets all matching rows.
// .run() runs a query (insert/update/delete).
// .exec() runs raw SQL without parameters (good for DDL like CREATE TABLE).


// Nodemon is a tool that automatically restarts your Node.js application when file changes are detected. It's useful for development, especially when you want to see changes without manually restarting the server.
// To use Nodemon, install it globally or as a dev dependency in your project. Then, run your Node.js application with Nodemon instead of Node.js directly.