/*
“ the [[Prototype]] property just contains a pointer to the prototype, 
and any changes to the prototype are immediately available on any instance 
referencing it. ”
*/

function Person(name) {
    this.name = name;
}

Person.prototype = {constructor: Person,
    constructor: Person,

    sayName: function() {
        console.log(this.name);
    }, 

    toString: function() {
        return "[Person " + this.name + "]";
    }
}

 var person1 = new Person("Nicholas");
 var person2 = new Person("Greg");

 console.log("sayHi" in person1); // false
 console.log("sayHi" in person2); // false

 // add a new method
 Person.prototype.sayHi = function() {
    console.log("Hi");
 };

 person1.sayHi(); // "Hi"
 person2.sayHi(); // "Hi"

 /*
 “When you use Object.seal() or Object.freeze() on an object, you are acting 
 solely on the object instance and the own properties. You can’t add new own 
 properties or change existing own properties on frozen objects, but you can
  certainly still add properties on the prototype and continue extending those 
  objects”
 */

var person1 = new Person("Nicholas");
var person2 = new Person("Greg");

Object.freeze(person1);

Person.prototype.sayHi = function() {
    console.log("Hi");
};

person1.sayHi(); // "Hi"
person2.sayHi(); // "Hi"