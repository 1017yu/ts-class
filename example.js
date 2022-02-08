"use strict";
class Person {
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
const p1 = new Person("Kled");
const p2 = new Person();
console.log(p1);
console.log(p2);
// -----------------------------------------------
class Person0 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const p0 = new Person0("Kled", 25);
console.log(p0);
