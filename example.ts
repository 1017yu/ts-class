class Person {
  name: string
  age: number = 25

  constructor(name?: string) {
    if (name === undefined) {
      this.name = "Kled"
    } else {
    this.name = name
    }
  }
}

const p1: Person = new Person("Kled"); 
const p2: Person = new Person();

console.log(p1);
console.log(p2);

// -----------------------------------------------

class Person0 {
  public constructor(public name: string, private age: number){}
}

const p0: Person0 = new Person0("Kled", 25)
console.log(p0)