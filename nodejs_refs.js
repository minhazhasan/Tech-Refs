/*
 * NodeJs Reference
 * Refs: 1. NodeJs Documentation
 *		 2. Building Real world scalable apps by Azat Mardan
*/


/*
 *Introduction:
 *****Node.js is an open-source and cross-platform JavaScript runtime environment.
 *****Node.js runs the V8 JavaScript engine, the core of Google Chrome, outside of the browser.
 *****A Node.js app is run in a single process, without creating a new thread for every request.
 *****When Node.js needs to perform an I/O operation, like reading from the network, 
 ******accessing a database or the filesystem, instead of blocking the thread and wasting CPU cycles waiting, 
 ******Node.js will resume the operations when the response comes back.
 ******JavaScript is internally compiled by V8 with just-in-time (JIT) compilation to speed up the execution.
*/

// Installation

// Ubuntu/Debian Packages: got to https://github.com/nodesource/distributions/blob/master/README.md
// Windows: download one-click installer from https://nodejs.org/en/download/
// MacOS: go to https://nodejs.dev/how-to-install-nodejs

//Access Environment variable
process.env.NODE_ENV

//Accessing command line arguments
const args = process.argv.slice(2)

// node app.js timer
console.log(args[0]) //->timer

// use minimist library for parsin key value pair
const args = require('minimist')(process.argv.slice(2));\

// node app.js --timer=0
console.log(args['timer']) // 0

/*Nodejs command line output*/

// clear the console
console.clear()

// count the output
const oranges = ['orange 1', 'orange 2'];
const apple = ['one apple'];

console.count(oranges); // -> 1
console.count(oranges); // -> 2
console.count(apple); // -> 1
