// primitive types
console.log("// primitive types")

// All primitive types have literal representations of their values.
// when you assign a primitive value to a variable, the value is copied into that variable.

// strings
var name = "Nicholas";
var selection = "a";

// numbers
var count = 25;
var cost = 1.51;

// boolean
var found = true;

// null
var object = null;

// undefined
var flag = undefined;
var ref; // assigned undefined automatically


// assign by copy
console.log("// assign by copy")

var color1 = "red";
var color2 = color1;

console.log(color1);
console.log(color2);

color1 = "blue";

console.log(color1);
console.log(color2);


// identifying primitive types
console.log("// identifying primitive types")

// The best way to identify primitive types is with the typeof operator, which 
// works on any variable and returns a tring indicating the type of data.

console.log(typeof "Nicholas"); // "string"
console.log(typeof 10); // "number"
console.log(typeof 5.1); // "number"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // undefined
// null is an empty object pointer
console.log(typeof null); // object
// the best way to determine if a variable is null
// is to compare it against null directly
var value;
console.log(value === null); // true


// comparing without coercion
console.log("// comparing without coercion")

// triple equals does the comparison without coercing the variable to another type.

// double equals converts the string into a number before it makes the comparision.
console.log("5" == 5); // true
// triple equals operator doesn't consider these values equal because they are two different types.
console.log("5" === 5); // false

console.log(undefined == null); // true
console.log(undefined === null); // false


// primitive methods
console.log("// primitive methods")

// primitive types, strings, numbers, and booleans actually have methods. (null and undfined haven't)

var name = "Nicholas";
var lowercaseName = name.toLowerCase(); // convert to lowercase
var firstLetter = name.charAt(0); // get first character
var middleOfName = name.substring(2, 5); // get characters 2-4

var count = 10;
var fixedCount = count.toFixed(2); // convert to "10.00"
var hexCount = count.toString(16); // convert to "a"

var flag = true;
var stringFlag = flag.toString(); // convert to "true"


/*
“Despite the fact that they have methods, primitive values themselves are not
 objects. JavaScript makes them look like objects to provide a consistent 
 experience in the language”
 */
