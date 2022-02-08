class Person3 {
  public name: string
  private age: number = 25

  public constructor(name?: string) {
    if (name === undefined) {
      this.name = "Kled"
    } else {
    this.name = name
    }
  }
}

const p3: Person3 = new Person3("Kled");

console.log(p3); // console.log(p3.age) error