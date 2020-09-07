/*
“Accessor properties also have two additional attributes. Because there is no value 
stored for accessor properties, there is no need for [[Value]] or [[Writable]]. 
Instead, accessors have [[Get]] and [[Set]], which contain the getter and setter 
functions, respectively.”
*/

var person1 = {
    _name: "Nicholas",

    get name() {
        console.log("Reading name");
        return this ._name;
    },

    set name(value) {
        console.log("Setting name to %s", value);
        this._name = value;
    }
};

// This code can also be written to follows:

var person1 = {
    _name: "Nicholas"
};

Object.defineProperty(person1, "name", {
    get: function() {
        console.log("Reading name");
        return this ._name;
    },
    set: function(value) {
        console.log("Setting name to %s", value);
        this._name = value;
    },
    enumerable: true,
    configurable: true
});

/*
“Notice that the get and set keys on the object passed in to Object.defineProperty()
 are data properties that contain a function. You can’t use object literal accessor
  format here.”
*/

var person1 = {
    _name: "Nicholas"
};

Object.defineProperty(person1, "name", {
    get: function() {
        console.log("Reading name");
        return this ._name;
    }
});

console.log("name" in person1); // true
console.log(person1.propertyIsEnumerable("name")); // false
delete person1.name;
console.log("name" in person1) // true

person1.name = "Greg";
console.log(person1.name); // "Nicholas"

/*
“As with accessor properties defined via object literal notation, an accessor 
property without a setter throws an error in strict mode when you try to change 
the value. In nonstrict mode, the operation silently fails. Attempting to read 
an accessor property that has only a setter defined always returns undefined.”
*/