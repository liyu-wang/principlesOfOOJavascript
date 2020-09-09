/*
“You can think of a prototype as a recipe for an object. Almost every 
function (with the exception of some built-in functions) has a prototype
 property that is used during the creation of new instances. That prototype 
 is shared among all of the object instances, and those instances can access
  properties of the prototype.”
*/

var book = {
    title: "The Principles of Object-Oriented Javascript"
};

console.log("title" in book);                                    // true
console.log(book.hasOwnProperty("title"));                       // true
console.log("hasOwnProperty" in book);                           // true
console.log(book.hasOwnProperty("hasOwnProperty"));              // false
console.log(Object.prototype.hasOwnProperty("hasOwnProperty"));  // true

// “in operator returns true for both prototype properties and own properties.”

// Identifying a prototype property

function hasPrototypeProperty(object, name) {
    return name in object && !object.hasOwnProperty(name);
}

console.log(hasPrototypeProperty(book, "title")); // false
console.log(hasPrototypeProperty(book, "hasOwnProperty")); // true