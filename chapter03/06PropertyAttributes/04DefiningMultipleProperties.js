var person1 = {};

Object.defineProperty(person1, {
    _name: {
        value: "Nicholas",
        emuerable: true,
        configurable: true,
        writable: true
    },
    // accessor property
    name: {
        get: function() {
            console.log("Reading name");
            return this._name;
        },
        set: function(value) {
            console.log("Setting name to %s", value);
            this._name = value;
        },
        enumerable: true,
        configurable: true
    }
});