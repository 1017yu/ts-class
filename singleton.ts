class ClassName {
  private static instance: ClassName | null = null;
  public static getInstance(): ClassName {
    // ClassName으로부터 만든 object가 없으면 만든다.
    if (ClassName.instance === null) {
      ClassName.instance = new ClassName()
    }
    // ClassName으로부터 만든 object가 있으면 그걸 리턴
    return ClassName.instance
  }
  private constructor() {}
 }

 const a1 = ClassName.getInstance()
 const a2 = ClassName.getInstance()  

 console.log(a1 === a2)


class Parent {
  constructor(protected _name: string, private _age: number) {}

  public print(): void {
    console.log(`이름은 ${this._name}이고, 나이는 ${this._age}살 입니다`) 
  }

  protected printName(): void {
    console.log(this._name)
  }
}

const p = new Parent('Mark', 39)
p.print()

class Child extends Parent {
  public gender = 'male'

  constructor(age: number) {
    super('Mark Jr', age)
    this.printName()
  }
}

const a3 = new Child(5)
a3.print()

