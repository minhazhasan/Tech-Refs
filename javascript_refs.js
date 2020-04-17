// Javascript reference
// Book - Eloquent Javascript (Marjin Haverbeke)

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


--------Unary operators--------

this means it can take only one operand.

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

--------Data Structures: Objects and Arrays(Mutable)----------
 // Arrays

 let lisOfNumbers = [2,3,5,6,7,5];
 console.log(listOfNumbers[2]); // 5
 
 listOfNumbers.push(9); // add element to last, [2,3,5,6,7,9]
 lisOfNumbers.pop(); // remove element from last, 9
 lisOfNumbers.shift(); // remove element from first, 2
 lisOfNumbers.unshift(12); // add element to first, [12,3,5,6,7]
 lisOfNumbers.indexOf(3); // 1
 lisOfNumbers.lastIndexOf(5); // 5

 *** both indexOf and lastIndexOf take optional second argument 
     that indicates where to start where to start searching. ***

 lisOfNumbers.slice(2, 4); // [5,6]
 lisOfNumbers.slice(2); // [5,6,7,5]

 function remove(array, index){
 	return array.slice(0, index).concat(array.slice(index + 1));
 }

 console.log(remove(lisOfNumbers, 2)) // [2,3,6,7,5]
 
 // Objects

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

*** Javascript objects are mutable ***