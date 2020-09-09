// --- The [[Prototype]] Property ---

/*
“An instance keeps track of its prototype through an internal property called 
[[Prototype]]. This property is a pointer back to the prototype object that 
the instance is using. When you create a new object using new, the constructor’s
 prototype property is assigned to the [[Prototype]] property of that new object.”
*/

/*
 “You can read the value of the [[Prototype]] property by using the 
 Object.getPrototypeOf() method on an object.”
 */

var object = {};
var prototype = Object.getPrototypeOf(object);

console.log(prototype === Object.prototype); // true

// For any generic object like the one, [[Prototype]] is always a reference to Object.prototype.

// “You can also test to see if one object is a prototype for another by 
// using the isPrototypeOf() method”

var object = {};
console.log(Object.prototype.isPrototypeOf(object)); // true

var object = {};
console.log(object.toString()); // [object Object]

object.toString = function() {
    return "[object Custom]";
};

console.log(object.toString()); // [object Custom]

// delete own property
delete object.toString

console.log(object.toString()); // [object Object]

// no effect - delete only works on own properties
delete object.toString;
console.log(object.toString()); // [object Object]