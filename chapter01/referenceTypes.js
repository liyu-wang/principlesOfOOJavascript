var object = new Object();

var object1 = new Object();
var object2 = object1;

// Dereferencing objects
var object1 = new Object();
// do something
object1 = null; // dereference

// Adding or removing properties
var object1 = new Object();
var object2 = object1;
object1.myCustomProperty = "Awesome!";
console.log(object2.myCustomProperty); // "Awesome!"