// Common Attributes
/*
“There are two property attributes shared between data and accessor properties. 
One is [[Enumerable]], which determines whether you can iterate over the property. 
The other is [[Configurable]], which determines whether the property can be changed.”
*/

/*
“You can remove a configurable property using delete and can change its attributes 
at any time. (This also means configurable properties can be changed from data 
    to accessor properties and vice versa.) ”
*/

/*
“If you want to change property attributes, you can use the Object.defineProperty() 
method. This method accepts three arguments: the object that owns the property, 
the property name, and a property descriptor object containing the attributes to set.
 The descriptor has properties with the same name as the internal attributes but 
 without the square brackets. So you use enumerable to set [[Enumerable]], and 
 configurable to set [[Configurable]].”
*/

var person1 = {
    name: "Nicholas"
};

Object.defineProperty(person1, "name", {
    enumerable: false
});

console.log("name" in person1); // true
console.log(person1.propertyIsEnumerable("name")); // false

var properties = Object.keys(person1);
console.log(properties.length); // 0

Object.defineProperty(person1, "name", {
    configurable: false
});

// try to delete the property
delete person1.name;
console.log("name" in person1); // true
console.log(person1.name); // "Nicholas"

Object.defineProperty(person1, "name", {
    // error!!!
    configurable: true
});