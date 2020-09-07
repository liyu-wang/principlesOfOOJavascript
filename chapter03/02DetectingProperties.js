/*
“The if condition evaluates to true if the value is truthy (an object, a nonempty string,
     a nonzero number, or true) and evaluates to false if the value is falsy 
     (null, undefined, 0, false, NaN, or an empty string). ”
*/
// unreliable
if (person1.age) {
    // do something with age
}

// “The in operator looks for a property with a given name in a specific 
// object and returns true if it finds it.”
console.log("name" in person1); // true
console.log("age" in person1); // true
console.log("title" in person1); // false

var person1 = {
    name: "Nicholas",
    sayName: function() {
        console.log(this.name);
    }
};
console.log("sayName" in person1); // true

// The in Operation checks for both own properties and prototype properties.

console.log("name" in person1); // true
console.log(person1.hasOwnProperty("name")); // true

console.log("toString" in person1); // true
console.log(person1.hasOwnProperty("toString")); //false
