function sayMessage(message) {
    console.log(message);
}

function sayMessage() {
    console.log("Default message");
}

sayMessage("Hello!"); // outputs "Default message"

/* 
“In JavaScript, however, when you define multiple functions with the same name, 
the one that appears last in your code wins. The earlier function declarations are 
completely removed, and the last is the one that is used”
*/

// equivalent to objects like this

var sayMessage1 = new Function("message", "console.log(message);");

sayMessage1 = new Function("console.log(\"Default message\");");

sayMessage1("Hello!"); // outputs "Default message"

// overriding

/*
“The fact that functions don’t have signatures in JavaScript doesn’t mean you can’t mimic
 function overloading. You can retrieve the number of parameters that were passed in by 
 using the arguments object, and you can use that information to determine what to do”
*/

function sayMessage2(message) {
    if (arguments.length === 0) {
        message = "Default message";
    }

    console.log(message);
}

sayMessage2("Hello!");

/*
“In practice, checking the named parameter against undefined is more common than relying on arguments.length.”
*/

function sayMessage3(message, callback) {
    console.log(message);

    if (typeof callback === "function") {
        callback(message);
    }
}

sayMessage3("hello", function(message) {
    if (message !== undefined) {
        console.log("Just said '" + message + "'");
    }
});
