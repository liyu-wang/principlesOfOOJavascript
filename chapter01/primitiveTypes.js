// strings
var name = "Nicholas";
var selection = "a";

// numbers
var count = 25;
var cost = 1.51

// boolean
var found = true;

// null
var object = null;

// undefined
var flag = undefined;
var ref; // assigned undefined automatically

// assign by copy

var color1 = "red";
var color2 = color1;

console.log(color1);
console.log(color2);

color1 = "blue";

console.log(color1);
console.log(color2);

// identifying primitive types
console.log("// identifying primitive types")

console.log(typeof 10);
console.log(typeof 5.1);
console.log(typeof true);
console.log(typeof undefined); // undefined

console.log(typeof null); // x object
var value;
console.log(value === null); // ✓ true

// comparing without coercion
console.log("// comparing without coercion")

console.log("5" == 5); // true
console.log("5" == 5); // false

console.log(undefined == null); // true
console.log(undefined === null); // false

// primitive methods
console.log("// primitive methods")

var name = "Nicholas";
var lowercaseName = name.toLowerCase();
var firstLetter = name.charAt(0);
var middleOfName = name.substring(2, 5);

var count = 10;
var fixedCount = count.toFixed(2); // convert to "10.00"
var hexCount = count.toString(16);

var flag = true;
var stringFlag = flag.toString(); // convert to "true"
