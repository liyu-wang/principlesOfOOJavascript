/*
“The first argument to bind() is the this value for the new function. 
 All other arguments represent named parameters that should be permanently
 set in the new function. You can still pass in any parameters that aren’t 
 permanently set later.”
*/

function sayNameForAll(label) {
    console.log(label + ":" + this.name);
}

var person1 = {
    name: "Nicholas"
};

var person2 = {
    name: "Greg"
};

// create a function just for person1
// No parameters are bound for sayNameForPerson1(), so you still need to pass in the label for the output.
var sayNameForPerson1 = sayNameForAll.bind(person1);
sayNameForPerson1("person1") // outputs "person1:Nicholas"

// create a function just for person2
/* sayNameForPerson2 not only binds this to person2 but also bings the first parameter as "person2"
 that means you can call sayNameForPerson2 withoutpassing in any additional argument.*/
var sayNameForPerson2 = sayNameForAll.bind(person2, "person2");
sayNameForPerson2(); // outputs "person2:Greg"

// attaching a method to an object doesn't change 'this'
/* “The function is bound, so the value of this doesn’t change even though sayNameForPerson1 is now 
 a function on person2. The method still outputs the value of person1.name.” */
person2.sayName = sayNameForPerson1;
person2.sayName("person2"); // outputs "person2: Nicholas"

var person3 = {
    name: "Liyu"
};
var sayNameForPerson3 = sayNameForAll.bind(person3, "myself");
sayNameForPerson3("some one else");