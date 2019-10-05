class Human {
  name: string
  age: number
  sex: string;
  constructor(name: string, age: number, sex: string) {
    this.name = name
    this.age = age
    
    this.sex = sex
  }
}

class Man extends Human {
  constructor(name:string, age: number, sex: string) {
    super(name, age, sex)
  }
}

let man = new Man('张三', 30, '女')

console.log(' man: ', man)