var items = new Array();
var now = new Date();
var error = new Error("Somthing bad happened.");
var func = new Function("console.log('Hi');");
var object = new Object();
var re = new RegExp("\\d+");

// Literal Forms

// object and array literals

var book = {
    name: "The principles of Object-Oriented Javascript",
    year: 2014
}

var book = {
    "name": "The principles of Object-Oriented Javascript",
    "year": 2004
}

var book = new Object();
book.name = "The principles of Object-Oriented Javascript";
book.year = 2014;

var colors = ["red", "blue", "green"];
console.log(colors[0]);

var colors = new Array("red", "blue", "green");
console.log(colors[0]);

// Function literals

function reflect(value) {
    return value;
}
// is the same as
var reflect = new Function("value", "return value;");

// Regular expression literals
var numbers = /\d+/g
// is the same as
var numbers = new RegExp("/\\d+", "g");