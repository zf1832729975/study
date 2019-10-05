// number

// Number
// String
// Array
// null
// undefined

var num:number = 1234;
let str:string = "string"

class Student {
  fullName: string;
  constructor(public firstName:string, public middleInitial:string, public lastName:string) {
      this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}

interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person : Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Jane", "M.", "User");

document.body.innerHTML = greeter(user);


let numArr:number[] = [1, 2, 4,6]
let strArr:string[] = ['234', 'asdf', 'asdf']

let list:Array<number> = [1, 2, 3]

enum Color {
  red = '234',
  green = 'asdf',
  blue = 'asdf'
}

Color.red