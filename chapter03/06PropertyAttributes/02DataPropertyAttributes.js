/*
“Data properties possess two additional attributes that accessors do not. 
The first is [[Value]], which holds the property value. ”
“The second attribute is [[Writable]], which is a Boolean value indicating 
whether the property can be written to.”
*/

var person1 = {
    name: "Nicholas"
};

// is equivalent to

var person1 = {};

Object.defineProperty(person1, "name", {
    value: "Nicholas",
    enumerable: true,
    configurable: true,
    writable: true
});

/*
“When you are defining a new property with Object.defineProperty(), 
it’s important to specify all of the attributes because Boolean attributes 
automatically default to false otherwise. ”
*/

var person1 = {};

Object.defineProperty(person1, "name", {
    value: "Nicholas"
});

console.log("name" in person1) // true
console.log(person1.propertyIsEnumerable("name")); // false

delete person1.name;
console.log("name" in person1); // true

person1.name = "Greg";
console.log(person1.name); // "Nicholas"