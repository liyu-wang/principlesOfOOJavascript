// There are three primitive wrapper types
// String Number and Boolean

// The primitive wrapper types are reference types that
// are automatically created behind the scenes whenever 
// strings, numbers, or Booleans are read.

var name = "Nicholas";
var firstChar = name.charAt(0);
console.log(firstChar);

// what the JavaScript engine does
var name = "Nicholas";
var temp = new String(name);
var firstChar = temp.charAt(0);
temp = null;
console.log(firstChar);

// Because the second line uses a string(a primitive) like
// an object, the javascript engine creates an instance of
// String so that charAt(0) will work. The String object
// exists only for one statement before it's destroyed.

var name = "Nicholas";
name.last = "Zakas";

console.log(name.last); // undefined

// When working with regular objects, you can add properties at 
// any time and they stay until you manually remove them. With 
// primitive wrapper types, properties seem to disappear because 
// the object on which the property was assigned is destroyed
// immediately afterward.

// what the JavaScript engine does
var name = "Nicholas";
var temp = new String(name);
temp.last = "Zakas";
temp = null; // temporary object destroyed

var temp = new String(name);
console.log(temp.last); // undefined
temp = null;

// “Instead of assigning a new property to a string, the code actually 
// creates a new property on a temporary object that is then destroyed. 
// When you try to access that property later, a different object is 
// temporarily created and the new property doesn’t exist there.”


// Although reference values are created automatically for primitive
// values, when instanceof checks for these types of values the result
// is false.

var name = "Nicholas";
var count = 10;
var found = false;

console.log(name instanceof String); // false
console.log(count instanceof Number); // false
console.log(found instanceof Boolean); // false

// The instanceof operator returns false because a temporary 
// object is created only when a value is read. Because instanceof
// doesn't actually read anything, no temporary objects are created,
// and it tells use the values aren't instances of primitive 
// wrapper types.

// You can create primitive wrapper types manually, but
// there are certain side effects

var name = new String("Nicholas");
var count = new Number(10);
var found = new Boolean(false);

console.log(typeof name); // "object"
console.log(typeof count); // "object"
console.log(typeof found); // "object"

// creating an instance of the primitive wrapper type just creates
// another object, which means that typeof can't identify the type
// of data you intend to store.

// In addition, you can't use String, Number, and Boolean objects
// as you would primitive values.

var food = new Boolean(false);

if (food) {
    console.log("Found");
}

// An object is always considered true inside a conditional
// statement. It doesn't matter that the object represents false;
// it's an object, so it evaluates to true.