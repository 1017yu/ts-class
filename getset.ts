class Person4 {
  public constructor(public _name: string, private age: number){}

  get name() {
    console.log('get')
    return this._name
  }

  set name(n: string) {
    console.log('set')
    this._name = n;
  }
}

const p4: Person4 = new Person4("Kled", 25)
console.log(p4.name)  // get 을 하는 함수 getter
p4.name = "Kled" // set 을 하는 함수 setter