/*
“Even though this is typically assigned automatically, you can 
change its value to achieve different goals.”
*/

/*
“call method executes the function with a particular this value and
 with specific parameters. The first parameter of call() is the value 
 to which this should be equal when the function is executed. 
 All subsequent parameters are the parameters that should be passed into the function.”
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

var name = "Michael";

sayNameForAll.call(this, "global");     // outputs "global:Michael" global:undefined
sayNameForAll.call(person1, "person1"); // outputs "person1:Nicholas"
sayNameForAll.call(person2, "person2"); // outputs "person2:Greg"