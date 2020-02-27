var person = {
    name: "Nicholas",
    sayName: function() {
        console.log(person.name);
    }
};

person.sayName(); // outputs "Nicholas"

// this obejct

/*
“Every scope in JavaScript has a this object that represents the calling object 
for the function. In the global scope, this represents the global object 
(window in web browsers). When a function is called while attached to an object,
 the value of this is equal to that object by default.”
*/

var person = {
    name: "Nicholas",
    sayName: function() {
        console.log(this.name);
    }
};

person.sayName(); // outputs "Nicholas"


function sayNameForAll() {
    console.log(this.name);
}

var person1 = {
    name: "Nicholas",
    sayName: sayNameForAll
};

var person2 = {
    name: "Greg",
    sayName: sayNameForAll
}

var name = "Michael";

person1.sayName(); // outputs "Nicholas"
person2.sayName(); // outputs "Greg"

sayNameForAll(); // outputs "Michael"