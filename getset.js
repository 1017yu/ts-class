"use strict";
class Person4 {
    constructor(_name, age) {
        this._name = _name;
        this.age = age;
    }
    get name() {
        console.log('get');
        return this._name;
    }
    set name(n) {
        console.log('set');
        this._name = n;
    }
}
const p4 = new Person4("Kled", 25);
console.log(p4.name); // get 을 하는 함수 getter
p4.name = "Kled"; // set 을 하는 함수 setter
