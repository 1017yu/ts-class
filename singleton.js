"use strict";
class ClassName {
    constructor() { }
    static getInstance() {
        // ClassName으로부터 만든 object가 없으면 만든다.
        if (ClassName.instance === null) {
            ClassName.instance = new ClassName();
        }
        // ClassName으로부터 만든 object가 있으면 그걸 리턴
        return ClassName.instance;
    }
}
ClassName.instance = null;
const a1 = ClassName.getInstance();
const a2 = ClassName.getInstance();
console.log(a1 === a2);
class Parent {
    constructor(_name, _age) {
        this._name = _name;
        this._age = _age;
    }
    print() {
        console.log(`이름은 ${this._name}이고, 나이는 ${this._age}살 입니다`);
    }
}
const p = new Parent('Mark', 39);
p.print();
class Child extends Parent {
    constructor(age) {
        super('Mark Jr', age);
        this._name = 'Mark Jr.';
        this.gender = 'male';
    }
}
const a3 = new Child(5);
a3.print();
