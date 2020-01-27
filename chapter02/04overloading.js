function sayMessage(message) {
    console.log(message);
}

function sayMessage() {
    console.log("Default message");
}

sayMessage("Hello!"); // outputs "Default message"

// equivalent to objects like this

var sayMessage1 = new Function("message", "console.log(message);");

sayMessage1 = new Function("console.log(\"Default message\");");

sayMessage1("Hello!"); // outputs "Default message"

// overriding

function sayMessage2(message) {
    if (arguments.length == 0) {
        message = "Default message";
    }

    console.log(message);
}

sayMessage2("Hello!");