// Javascript reference
/* References - Eloquent Javascript (Marjin Haverbeke)
				Mozilla Javascript MDN library
*/

// Javascript Types, Operators

`--------Numbers(Immutable)----------------`
`Javascript uses 64 bits to store a number. In Javascript, integers are recognized by numbers.`

number, let i = 12;
fractional number, let f = 5.19;
for very big or small numbers, let bigNumber = 3.19e5;
Special Numbers, let i  = Infinity; (positive infinity)
				 let ni = -Infinity; (negative infinity)
				 let nan = NaN; (not a number, isn't very useful)

--------Arithmetic-------------

`Arithmetic operators: +(add), -(minus), *(multiplication), /(division), %(modulus)`  

--------Strings(Immutable)----------------

I Javascript we can use, three types of string literals

`Down on the sea`
"Lie on the ocean"
'Float on the ocean'

to include escaping characters, or provide inline formatting we use backtick operator.
`This is ref for Javascript programmers. \nI am going to ignore escaping.`
`Sum of x + y = ${5 + 3}`

Backtick-quoted strings, usually called template literals.

let s = "coconuts";

console.log(s.slice(2, 4)); // co
console.log(s.indexOf("u")); // 5, returns the first occurence of the character.
console.log("   hello, world!  ".trim()); // 'hello, world', remove whitespaces from start and end of the string.
console.log(String(6).padStart(3, "0")); // 006

let sentence = "Secretary birds specialize in stomping";
let words = sentence.split(" ");

console.log(words); // ['Secretary', 'birds', 'specialize', 'in', 'stomping']
console.log(words.join(" ")); // 'Secretary birds specialize in stomping'
console.log("AA".repeat(3)); // 'aaaaaa'

console.log(s.length); // 8
console.log(s[1]); // 'o'

--------Unary operators--------

e.g, console.log(typeof 4.5) // number
	 console.log(typeof "x") // string

--------Boolean(Immutable) Values---------

let t = true;
let f = false;

*** There is only one value in Javascript that is not equal to itself, NaN***
console.log(NaN == NaN) //false

--------Logical Operators-------

Operators: &&(and), ||(or), !(not)
ternary: console.log(true ? 1 : 2);

*** There are two special values, written null and undefined, that are used to denote the absence of a meaning value.

--------type coercion(automatic type conversion)----------

console.log(8 * null); // 0, null converted to 0
console.log("5" - 1); // 4, "5" converted to 5, because, there is no valid operation for "-" operator in strings.
console.log("5" + 1); // 51, 1 converted to "1" and "+" operator is used for concatenation
console.log("five" * 2) // NaN
console.log(false == 0) // true 

*** when null or undefined occurs on either side of the operator, it produces true only if both sides are one of null or undefined ***

console.log(null == undefined) // true
console.log(null == 0) // false

-------Comparison operators---------

console.log(3 > 2) // greater than operator, -> true
console.log(3 < 2) // less than operator, -> false
console.log(5 == 5) // equality operator, -> true
console.log(0 === false) // strict equality operator, -> false
console.log(0 !== false) // strict inequality operator, -> true

------Short circuit evaluation------

console.log(null || "user") // user
console.log("Agnes" || "user") // Agnes
console.log(null && "user") // null
console.log("Agnes" && "user") // user

------Bindings----------------------

let val = "This is a string literal"; // provides block level scope
var val = 5; // provides function level scope only
const val = 12; // constant binding, can't change it after definition

let x = 10;
if(true){
	let y = 20;
	var z = 30;
	console.log(x + y + z); // 60
}

// y is not visible here
console.log(x + z); // 40


*** Javascript binding names cannot start with a digit. ***
*** only (_) & ($) can be used. ***
*** The collection of bindings and their values that exist at a given time is called the environment. ***

------Control Flow------------------

let theNumber = Number(prompt("Pick a number"));
if(!Number.isNaN(theNumber)){
	console.log("Your number is the square root of" + theNumber * theNumber);
}else {
	console.log("You entered a wrong number");
}

let number = 0;
while(number <= 12){
	result = result * 2;
	counter = counter + 1;
}
console.log(result);

let yourName;
do {
	yourName = prompt("Who are you?");
} while(!yourName);
console.log(yourName);

for(let number = 0; number <= 12; number = number + 2){
	console.log(number);
	if(number % 6 == 0) break; // breaking out of a loop
}

// foreach loop modern javascript, traverse through any structure
for(let s of "stirng"){
	console.log(s); // s t r i n g
}

switch(Number(prompt("Pick a number"))){
	case "5":
		console.log("You won 5,000");
		break;
	case "9":
		console.log("You won 10,000");
		break;
	case "12":
		console.log("You won 100,000");
		break;
	default:
		console.log("Sorry better luck next time!");
		break;

}

/* This is a multiline comment.
   This is useful for documentation.
*/

------Functions------------------

function myFunction(x){
	console.log(x);
}

// arrow functions, added in 2015
const power = (base, exp) => {
	let result = 1;
	for(let count = 0; count < exponent; count++){
		result *= base;
	}

	return result;
};

*** An arrow function does not have its own this.
*** An arrow function expression are best suited for non-method function.

// returning object literals
let func = () => ({val : 1, type: 'int'});
console.log(func()); //  { val: 1 , type: "int"}

// 'this' in function
function Person() {
  // The Person() constructor defines `this` as an instance of itself.
  this.age = 0;

  setInterval(function growUp() {
    // In non-strict mode, the growUp() function defines `this`
    // as the global object (because it's where growUp() is executed.), 
    // which is different from the `this`
    // defined by the Person() constructor.
    this.age++;
  }, 1000);
}

var p = new Person();

// optional arguments
function power(base, exp = 2){
	let result = 1;
	for(let count = 0; count < exponent; count++){
		result *= base;
	}
	return result;
}

// Closure - references a specific instance of local binding in an enclosing scope
// in short, you can use access specific instances of local variables after function execution.
// functional programming technique, use a functions in unique ways.

function multiplier(factor){
	return number => number * factor;
}
let twice = multiplier(2);
let triples = multiplier(3);

console.log(twice(5)); // 10
console.log(triples(5)); // 15

// recursion - 3x time slower than the iterative version.
// Now you choose - speed vs. elegance
function power(base, exponent){
	if(exponent == 0){
		return 1;
	} else{
		return base * power(base, exponent - 1);
	}
}
console.log(power(2, 3)); // 8

// Rest parameters
// ...numbers -> rest parameter
function max(...numbers){
	let result = -Infinity;
	for(let number of numbers)
		result = (result < number) ? number : result;

	return result;
} 

console.log(max(1, 4, 11, -12, 2, 3)); // 11

let numbers = [5,1,7];
console.log(max(...numbers));

// deep equal function
const deepEqual = (objA, objB) => {
	let objAKeys = Object.keys(objA);
	let objBKeys = Object.keys(objB);

	if(objAKeys.length != objBKeys.length)  return false;

	for(let i = 0; i < objAKeys.length; i++){
		if(objAKeys[i] != objBKeys[i]) return false;
		if(objA[objAKeys[i]] != objB[objBKeys[i]]) return false;
	}

	return true;
};

--------Arrays(Mutable)----------
 // Arrays

 let lisOfNumbers = [2,3,5,6,7,5];
 console.log(listOfNumbers[2]); // 5
 
 listOfNumbers.push(9); // add element to last, [2,3,5,6,7,9]
 lisOfNumbers.pop(); // remove element from last, 9
 lisOfNumbers.shift(); // remove element from first, 2
 lisOfNumbers.unshift(12); // add element to first, [12,3,5,6,7]
 lisOfNumbers.indexOf(3); // 1
 lisOfNumbers.lastIndexOf(5); // 5
 lisOfNumbers.splice(lisOfNumbers.indexOf(3), 1); // [2,5,6,7,5];
 lisOfNumbers.sort((a, b) => a - b); // [2,5,5,6,7]
 lisOfNumbers.sort((a, b) => b - a); // [7,6,5,5,2]

 *** both indexOf and lastIndexOf take optional second argument 
     that indicates where to start where to start searching. ***

 lisOfNumbers.slice(2, 4); // [5,6]
 lisOfNumbers.slice(2); // [5,6,7,5]

 function remove(array, index){
 	return array.slice(0, index).concat(array.slice(index + 1));
 }

 console.log(remove(lisOfNumbers, 2)) // [2,3,6,7,5]

 lisOfNumbers.forEach(l => console.log(l + 1)); // 3 4 7 8 6
 console.log(lisOfNumbers.filter(s => s % 2 == 0)); // [2, 6]
 console.log(lisOfNumbers.map(s => s * 2)); // [4,6,12,14,10]
 console.log(lisOfNumbers.reduce((a, b) => a + b)); // 23

 function reduce(array, combine, start){
 	let current = start;
 	for(let element of array)
 		current = combine(current, element);

 	return current;
 } 

 console.log(reduce(lisOfNumbers, (a, b) => a + b, 0)); // 23

 // flatten an array
 let arrays = [[1,2,3], [4,5], [6]];
 let flatArray = arrays.reduce((flat, current) => flat.concat(current), []); // not for deep flattening

 console.log(flatArray); // [1,2,3,4,5,6]
 --------------Objects(Mutable)----------------------

 let day1 = {
 	squirrel: false,
 	events: ["work", "touched tree", "pizza", "running"]
 };
console.log(day1.squirrel);

let anObject = {left:1, right:2};
console.log(anObject.left); // 1
delete anObject.left;
console.log(anObject.left); // undefined
console.log("left" in anObject); // false, in operator searches properties in an object
console.log("right" in anObject); // true

console.log(Object.keys(anObject)); // ['right']

let objectA = {a: 1, b: 2}
Object.assign(objectA, {b:3, c:4});
console.log(objectA); // {a:1, b:3, c:4}

console.log(typeof []); // 'object'

// Destructuring
let {name} = {name: "Faraji", age: 23};
console.log(name) // 'Faraji'

let [a, b] = [2, 5];
console.log(a); // 2

function anyFunc([a0, b0, c0]){
	return a0 + b0 + c0;
}

console.log(anyFunc([5, 3, 12])); // 
*** Javascript objects are mutable ***

-----------Math Object-------------
 // random number between 0(inclusive) and 1(exclusive)
 let randomNum = Math.floor(Math.random() * 10) // 5
 let roundNum = Math.round(3.5) // 4
 let ceilNum = Math.ceil(4.2) // 5


 ----------JSON Object--------------------

 // JSON = Javascript object notation
 // similar to Javascript object and arrays.
 // all property names have to be surrounded by double quotes.

 let string = JSON.stringify({sq: false, eve:["we", "the"]});
 console.log(string); // {"sq":false, "eve":["we", "the"]}
 console.log(JSON.parse(string).eve); // [ "we", "the" ]

 ----------OOP JS-------------------------

 ***Encapsulation
 	  - divide program into small pieces and encapsulate within a container like classes, functions, variables, closures, etc.
 	  - make each peice for responsible for it's own state;
 	  - separating interface from implementation usually called encapsulation.

 // Methods
 let rabbit = {};
 rabbit.speak = function(line){
 	console.log(`The rabbit says '${line}'`);
 } 

 rabbit.speak("I'm alive!!");

 // accessing instance
 rabbit.speak = function(line){
 	console.log(`The ${this.type} rabbit says '${line}'`);
 };

 let whiteRabbit = {type: "white", speak};
 let hungryRabbit = {type: "hungry", speak};

 console.log(whiteRabbit.speak("I'm white")); // The white rabbit says 'I'm white
 console.log(hungryRabbit.speak("I'm hungry")); // The hungry rabbit says 'I'm hungry

 // explicit call to 'this', only works for functions
 speak.call(hungryRabbit, 'Burp!'); // The hungry rabbit says 'Burp'

 ***Prototype (Classes in JS)
     - prototype is another object used as a fallback source of properties.
     - if a property not defined in the current object, JS searches the property in it's prototype,
     - then it's ancestrals prototype

  console.log(Object.getPrototypeOf(Math.max) == Function.prototype); // true
  console.log(Object.getPrototypeOf([]) == Array.prototype); // true
  
  // classic JS constructor for classes
  // each fuction has its own this binding
  function Rabbit(type){
  	this.type = type;
  }

  Rabbit.prototype.speak = function(line) => {
  	console.log(`The ${this.type} rabbit says '${line}'`);
  };

  let weirdRabbit = new Rabbit("weird");
  weirdRabbit.speak("I'm weird"); // The weird rabbit says 'I'm weird

  // Overriding
  weirdRabbit.speak = () => {
  	console.log("I'm weird rabbit"); 
  }

  weirdRabbit.speak(); // I'm weird rabbit

  // JS 2015, ES6 Classes

  class Rabbit{
  	constructor(type){
  		this.type = type;
  	}

  	speak(line){
  		console.log(`The ${this.type} rabbit says '${line}'`);	
  	}
  }

  let killerRabbit = new Rabbit("killer");
  let blackRabbit = new Rabbit("black");

  
  ----------------Maps--------------------
  ***Map object holds key-value pairs and remembers the original insertion order of the keys.***
  ***Object keys are not ordered and Maps don't have default deys.***

  let myMap = new Map();
  let keyString = 'a string';
  let keyObj    = {};
  let keyFunc   = function() {};

  // setting the values
  myMap.set(keyString, "value associated with 'a string'");
  myMap.set(keyObj, 'value associated with keyObj');
  myMap.set(keyFunc, 'value associated with keyFunc');

  myMap.size;              // 3

  // getting the values
  myMap.get(keyString);    // "value associated with 'a string'"
  myMap.get(keyObj);       // "value associated with keyObj"
  myMap.get(keyFunc);      // "value associated with keyFunc"

  myMap.get('a string');    // "value associated with 'a string'"
                         // because keyString === 'a string'
  myMap.get({});            // undefined, because keyObj !== {}
  myMap.get(function() {}); // undefined, because keyFunc !== function () {}

  myMap.clear(); // remove all key-value pairs
  myMap.set(0, 'zero');
  myMap.set(1, 'one');

  for(let [key, val] of myMap){
  	console.log(key + '=' + val); 
  }
  // 0 = zero 
  // 1 = one

  for (let key of myMap.keys()) {
    console.log(key)
  }
  // 0
  // 1

  for (let value of myMap.values()) {
    console.log(value)
  }
  // zero
  // one

  for (let [key, value] of myMap.entries()) {
    console.log(key + ' = ' + value)
  }
  // 0 = zero
  // 1 = one

  --------------Set---------------------
  // collection of unique values
  let mySet = new Set();
  mySet.add(1); // mySet = [1]
  mySet.add(5); // mySet = [1, 5]
  mySet.add(5); // mySet = [1, 5]

  mySet.has(5) // true
  mySet.size // 2

  mySet.delete(5) // deletes 5

  for(let item of mySet)
  	console.log(item);
  // 1
  // 5

  -------------Symbol------------------

  // possible for multiple instances to use the same property name for different things.
  // newly created symbols are unique.
  // Symbol is a primitive data type.

  const toStringSymbol = Symbol("toString");
  Array.prototype[toStringSymbol] = function(){
  	return `${this.length} cm of blue yarn`;
  };

  console.log([1,2].toString()); // 1, 2
  console.log([1,2][toStringSymbol]()); // 2 cm of blue yarn

  -------------Regular Expression-----

  let re1 = new RegExp("abc");
  let re2 = /abc/;
  let re3 = /[0-9]/;
  console.log(re1.test("abcde")); // true
  console.log(re2.test("abnd")); // true
  console.log(re3.test("in 1992")); // true


  -------------Async Javascript-------

  // Synchronous Execution

  const btn = document.querySelector('button');
  btn.addEventListener('click', () => {
  	alert('Clicked!');

  	let pElem = document.createElement('p');
  	pElem.textContent = 'This is a newly created paragraph.';
  	document.body.appendChild(pElem);
  });

  // Asynchonicity in JS

  // Async operation like promises are put into an event queue, which runs after the main thread - 
  // has finished processing so that they do not block subsequent code form running.
  
  // When promise created, it is neither in a success state or failure state. It is said to be pending.
  // When promise returns, it is said to be resolved.
  // successfull promise accessed by .then()
  // unsuccessfull promise is said to be rejected and accessed by .catch()

  