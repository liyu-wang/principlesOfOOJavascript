/*
“By default, all properties that you add to an object are enumerable, which means 
that you can iterate over them using a for-in loop. Enumerable properties have 
their internal [[Enumerable]] attributes set to true.”
*/

var object = {"a": 1, "b": 2};
var property;

for (property in object) {
    console.log("Name: " + property);
    console.log("Value: " + object[property]);
}

// “ECMAScript 5 introduced the Object.keys() method to retrieve an array of enumerable property names”

var properties = Object.keys(object);
// if you want to mimic for-in behaviour
var i, len;

for (i = 0, len = properties.length; i < len; i++) {
    console.log("Name: " + properties[i]);
    console.log("Value: " + object[properties[i]]);
}

// “The for-in loop also enumerates prototype properties, while Object.keys() returns only own (instance) properties.”

/*
“Keep in mind that not all properties are enumerable. In fact, most of the native methods on objects have 
their [[Enumerable]] attribute set to false. You can check whether a property is enumerable by using the 
propertyIsEnumerable() method,”
*/

var person1 = {
    name: "Nicholas"
};

console.log("name" in person1); // true
console.log(person1.propertyIsEnumerable("name")); // true

var properties = Object.keys(person1);
console.log(Array.isArray(properties)); // true
console.log("length" in properties); // true
console.log(properties.propertyIsEnumerable("length")); // false