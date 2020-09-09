/*
“A constructor is simply a function that is used with new to create an object.”
“The advantage of constructors is that objects created with the same constructor contain the same properties and methods.”
“constructor names should begin with a capital letter, to distinguish them from other functions.”
*/

function Person() {

}

var person1 = new Person();
var person2 = new Person();

// when you have no parameters to pass inoto your constructor, you can omit the parenthese.
var person1 = new Person;
var person2 = new Person;

// “The new operator automatically creates an object of the given type and returns it.”

console.log(person1 instanceof Person); // true
console.log(person2 instanceof Person); // true

/*
“You can also check the type of an instance using the constructor property.""
"Every object instance is automatically created with a constructor property that contains a 
reference to the constructor function that created it."
"For generic objects (those created via an object literal or the Object constructor), 
constructor is set to Object;”
*/

console.log(person1.constructor === Person); // true
console.log(person2.constructor === Person); // true

/*
“Even though this relationship exists between an instance and its constructor, you are still
 advised to use instanceof to check the type of an instance. This is because the constructor
  property can be overwritten and therefore may not be completely accurate.”
*/

// “The whole point of a constructor is to make it easy to create more objects with the same properties and methods. ”

function Person(name) {
    this.name = name;
    this.sayName = function() {
        console.log(this.name);
    };
}

/*
“The this object is automatically created by new when you call the constructor, and it is an 
instance of the constructor’s type. (In this case, this is an instance of Person.) There’s no 
need to return a value from the function because the new operator produces the return value.”
*/

var person1 = new Person("Nicholas");
var person2 = new Person("Greg");

console.log(person1.name); // "Nicholas"
console.log(person2.name); // "Greg"

person1.sayName(); // outputs "Nicholas"
person2.sayName(); // outputs "Greg"

// “you could also use Object.defineProperty() inside of a constructor to help initialize the instance”

function Person(name) {
    Object.defineProperty(this, "name", {
        get: function() {
            return name;
        },
        set: function(newName) {
            name = newName;
        },
        enumerable: true,
        configurable: true
    });

    this.sayName = function() {
        console.log(this.name);
    };
}

// “Make sure to always call constructors with new; otherwise, you risk changing 
// the global object instead of the newly created object.” 

var person1 = Person("Nicholas"); // note: missing "new"

console.log(person1 instanceof Person); // false
console.log(typeof person1); // "undefined"
console.log(name); // "Nicholas"

/*
“When Person is called as a function without new, the value of this inside of the constructor
 is equal to the global this object. ”
“The variable person1 doesn’t contain a value because the Person constructor relies on new to
 supply a return value. ”

“constructors alone don’t eliminate code redundancy. In the example code thus far, each 
instance has had its own sayName() method even though sayName() doesn’t change.”
*/