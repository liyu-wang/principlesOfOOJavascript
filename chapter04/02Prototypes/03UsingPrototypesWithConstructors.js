/*
“It’s much more efficient to put the methods on the prototype and then 
use this to access the current instance.”
*/

function Person(name) {
    this.name = name;
}

Person.prototype.sayName = function() {
    console.log(this.name);
};

var person1 = new Person("Nicholas");
var person2 = new Person("Greg");

console.log(person1.name); // "Nicholas"
console.log(person2.name); // "Greg"

person1.sayName(); // "Nicholas"
person2.sayName(); // "Greg"

/*
“You can also store other types of data on the prototype, but be careful when 
using reference values. Because these values are shared across instances,
 you might not expect one instance to be able to change values that another
  instance will access. ” 
*/

function Perosn(name) {
    this.name = name;
}

Person.prototype.sayName = function() {
    console.log(this.name);
};

Person.prototype.favourites = [];

var person1 = new Person("Nicholas");
var person2 = new Person("Greg");

person1.favourites.push("pizza");
person2.favourites.push("quinoa");

console.log(person1.favourites); // ['pizza', 'quinoa']
console.log(person2.favourites); // ['pizza', 'quinoa']

/*
 “Even though you can add properties to the prototype one by one, 
 many developers use a more succinct pattern that involves replacing 
 the prototype with an object literal”
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

 console.log(person1 instanceof Person); // true
 console.log(person1.constructor === Person); // true
 console.log(person1.constructor === Object); // fasle

 console.log(person2 instanceof Person); // true
 console.log(person2.constructor === Person); // true
 console.log(person2.constructor === Object); // fasle