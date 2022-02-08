"use strict";
class Person3 {
    constructor(name) {
        this.age = 25;
        if (name === undefined) {
            this.name = "Kled";
        }
        else {
            this.name = name;
        }
    }
}
const p3 = new Person3("Kled");
console.log(p3); // console.log(p3.age) error
