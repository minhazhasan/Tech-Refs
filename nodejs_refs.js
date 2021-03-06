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

// V8 engine refs
// 1. https://blog.sessionstack.com/how-javascript-works-inside-the-v8-engine-5-tips-on-how-to-write-optimized-code-ac089e62b12e
// 2. https://hackernoon.com/javascript-v8-engine-explained-3f940148d4ef
// 3. https://v8.dev/docs

// Installation

// Ubuntu/Debian Packages: got to https://github.com/nodesource/distributions/blob/master/README.md
// Windows: download one-click installer from https://nodejs.org/en/download/
// MacOS: go to https://nodejs.dev/how-to-install-nodejs

//Access Environment variable
process.env.NODE_ENV

// global object
// In nodejs global scope available via global object, rather than window object in browsers
global.setTimeout();
global.setInterval();

// creating a module
let msg = "Test";
function sendMsg(msg) {
	console.log(msg);
}

// module's exported name can be anything
module.exports.sendMsg = sendMsg;
exports.sendMsg = sendMsg;

// loading a module
// require returns exported objects from a module
const sendMsg = require('Location_of_your_jsFile');

/**
 * Node does not execute the code of a module immediately, instead it wraps the code
 * inside an immediate invocable function.
 */

// module wrapper function
(function (exports, require, module, __filename, __dirname) {
	// Your code here
})

// path module
const path = require('path');
let pathObj = path.parse(__filename);

// OS module
const os = require('os');

let totalMem = os.totalmem();
let freeMem = os.freemem();

// File System module
const fs = require('fs');

// get files in that directory
fs.readdir('./', (err, files) => {
	if(err) console.log('Error', err);
	else console.log('Result', files);
});

// Event Module
const EventEmitter = require('events');
const emitter = new EventEmitter();

// Register a listener
emitter.on('messageLogged', (arg) => {
	console.log('Listener called', arg);
});

// Raise an event and event argument
emitter.emit('messageLogged', /*Event Argument*/{ id: 1, url: 'url'});

// Extend EventEmitter
class Logger extends EventEmitter {
	log(message) {
		console.log(message);

		//raise an event
		this.emit('messageLogged', 'messageLogged', { id: 1, url: 'url'})
	}
}

const logger = new Logger();
logger.on('messageLogged', (arg) => {
	console.log('Listener called', arg);
});

logger.log('message');

// HTTP module
const http = require('http');

const server = http.createServer((req, res) => {
	if(req.url === '/'){
		res.write('Hello World');
		res.end();
	}
});

server.on('connection', (socket) => {
	console.log("New Connection...");
});

server.listen(3000);

//Accessing command line arguments
const args = process.argv.slice(2)

// node app.js timer
console.log(args[0]) //->timer

// use minimist library for parsin key value pair
const args = require('minimist')(process.argv.slice(2));

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

// print the stack trace
const func = () => {
	console.trace();
	return 'test';
};

//Trace
//    at Console.trace (internal/console/constructor.js:336:11)
//    at func (repl:2:9)
//    at repl:1:1
//    at Script.runInThisContext (vm.js:124:20)
//    at REPLServer.defaultEval (repl.js:325:29)
//    at bound (domain.js:425:14)
//    at REPLServer.runBound [as eval] (domain.js:438:12)
//    at REPLServer.onLine (repl.js:650:10)
//    at REPLServer.emit (events.js:198:15)
//    at REPLServer.EventEmitter.emit (domain.js:481:20)


/*
 * npm is the standard package manager for Node.js.
 * Yarn is an alternative to npm.
*/

// --save installs and adds the entry to the package.json file dependencies
npm i < package - name > --save

// --save-dev installs and adds the entry to the package.json file devDependencies
npm i < package - name > --save - dev
npm install--dev < PACKAGENAME >

	//update / update packages
	npm update
npm update < package - name >

// npm run tasks
{
	"scripts": {
		"start-dev": "node lib/server-development",
		"start": "node lib/server-production"
	},
}

npm run start-dev
npm run start

// or

npm start
npm start-dev

// npm package installation location
// npm performs 2 types of installation. 1. local install 2. global install

// local install, under node_modules in the current directory of developement
npm install lodash
npm i lodash

// global installation
// check global node_modules dir: npm root -g
// macOS or linux location: /usr/local/lib/node_modules
// Windows location: C:\Users\YOU\AppData\Roaming\npm\node_modules

npm i - g lodash
npm install - g lodash

// run executable packages under ./bin folder
npx < package - name >

// settings of your project saved in package.json file
// basic package.json file of a project
// start
{
	//the application/package name
	"name": "test_project",

	// the current version
	"version": "1.0.0",

	// brief description of the app/package
	"description": "A react.js project",

	// entry point for the application
	"main": "src/main.js",

	// true prevents the app/package to be accidentally published on npm
	"private": true,

	// a set of node scripts you can run
	"scripts": {
		"dev": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js",
		"start": "npm run dev",
		"unit": "jest --config test/unit/jest.conf.js --coverage",
		"test": "npm run unit",
		"lint": "eslint --ext .js,.vue src test/unit",
		"build": "node build/build.js"
	},

	// a list of npm packages installed as dependencies
	"dependencies": {
	},

	// a list of npm packages installed as development dependencies
	"devDependencies": {

	},

	// which versions of Node.js this package/app works on
	"engines": {

	},

	// to tell which browsers (and their versions) you want to support
	"browserlist": []
}
// end

// semantic versioning
//"mongoose": "^4.13.6" // Major.Minor.Patch
//"mongoose": "^4.13.7" // Fixing a bug
//"mongoose": "^4.14.0" // Adding features without breaking the stability(Minor Update)
//"mongoose": "5.0.0" // Major Update
//"mongoose": "^4.13.6" // Caret Character - 4.x
//"mongoose": "~4.13.6" // Tilde Character - 4.13.x

// package-lock.json: keep track of the exact version of every package that is installed so that a product is 100% reproducible
// npm update will update the package-lock.json

// To see the latest version of all the npm package installed, including their dependencies:
// npm list
// npm list - g // for globally installed packages
// npm list --depth=0 // only the application level dependencies

// Viewing registry info for a package
// npm view mongoose
// npm view mongoose dependencies // only show dependencies
// npm view mongoose version // only show versions

// installation an old version of an npm package
// npm install package@version
	
// npm install react@15.0.0

// check new releases of packages
// npm outdated

// To update to a new major version all the packages, install the npm-check-updates package globally
// npm install -g npm-check-updates

// then run it
// ncu -u // ncu - short form of npm-check-updates

// then run the update
// npm update

// uninstalling a package - npm uninstall/un package-name

// Semantic versioning, go to: https://nodejs.dev/semantic-versioning-using-npm
// Uninstall refs, go to: https://nodejs.dev/uninstalling-npm-packages

// Publish your own packages in NPM registry
// 1. Create a new folder - mkdir test-lib
// 2. npm init --yes
// 3. build your library - r.g. module.exports.add = function(a, b) {return a + b;}
// 4. npm adduser - if you don't have an account or
// 	  npm login - login to your npm account
// 5. npm publish
// *** Library name should be unique to be updated.

// To update a package
// 1. in the lib folder, add your feature.
// 2. update the lib - npm version major/minor/patch



/* Node.js Event loop
* The Node.js JavaScript code runs on a single thread. There is just one thing happening at a time.
*/
