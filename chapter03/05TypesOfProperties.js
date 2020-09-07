/*
“There are two different types of properties: data properties and accessor properties. 
Data properties contain a value, Accessor properties don’t contain a value but instead 
define a function to call when the property is read (called a getter), and a function 
to call when the property is written to (called a setter).”
*/

/* 
“ (The leading underscore is a common convention to indicate that the property is 
    considered to be private, though in reality it is still public.) ”
 */

var person1 = {
    _name: "Nicholas",

    get name() {
        console.log("Reading name");
        return this ._name;
    },

    set name(value) {
        console.log("Setting name to %s", value);
        this._name = value;
    }
};

console.log(person1.name); // "Reading name" then "Nicholas"

person1.name = "Greg";
console.log(person1.name); // "Setting name to Greg" then "Greg"