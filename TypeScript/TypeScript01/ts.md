# ts

## 安装TypeScript

> npm install -g typescript

## 编译代码

在index.ts中写入代码

```ts
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

```

> tsc index

就会生成 index.js

### 使用vscode编译

- 在项目中使用命令 `tsc --init` 就会生成 `tsconfig.json`, 可以在 `tsconfig.json` 文件中编辑 `outDir` 输出目录

- 点击 vscode 的终端，运行任务，选择有 `tsconfig.js` 的任务运行即可


## 基础类型
- number

  ```ts
   let num:number;
   let a:number = 1234
   ```
- string

   ```ts
   let num:string;
   let a:string = "sdf"
   ```
- boolean

  ```ts
  let isN:boolean = false

  ```
- array
  ```ts
  // first methods
  let numArr:number[] = [1, 2, 4,6]
  let strArr:string[] = ['234', 'asdf', 'asdf']
  // second methods
  let list:Array<number> = [1, 2, 3]
  ```
- 元组 tuple
  ```ts
  // Declare a tuple type
  let x: [string, number];
  // Initialize it
  x = ['hello', 10]; // OK
  // Initialize it incorrectly
  x = [10, 'hello']; // Error
  ```
- 枚举 enum 

  ```ts   
  // ts
  enum Color {
    red = '234',
    green = 'asdf',
    blue = 'asdf'
  }

  Color.red

  // output js
  var Color;
  (function (Color) {
      Color["red"] = "234";
      Color["green"] = "asdf";
      Color["blue"] = "asdf";
  })(Color || (Color = {}));
  Color.red;
  ```
- any
  ```ts
  let notSure:any = 4
  notSure = "maybe a string instead";
  notSure = false; // okay, definitely a boolean
  ```
- void 
  ```ts
  function warnUser():void {
    console.log("This is my warning message");
  }

  ```
-  null |  undefined
  ```ts
  // Not much else we can assign to these variables!
  let u: undefined = undefined;
  let n: null = null;
  ```
- Never
  `ever`类型表示的是那些永不存在的值的类型。 例如， `never`类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型； 变量也可能是 `never`类型，当它们被永不为真的类型保护所约束时。

  `never`类型是任何类型的子类型，也可以赋值给任何类型；然而，*没有*类型是`never`的子类型或可以赋值给`never`类型（除了`never`本身之外）。 即使 `any`也不可以赋值给`never`。

  下面是一些返回`never`类型的函数：

  ```ts
  // 返回never的函数必须存在无法达到的终点
  function error(message: string): never {
      throw new Error(message);
  }

  // 推断的返回值类型为never
  function fail() {
      return error("Something failed");
  }

  // 返回never的函数必须存在无法达到的终点
  function infiniteLoop(): never {
      while (true) {
      }
  }
  ```
- Object

  `object`表示非原始类型，也就是除`number`，`string`，`boolean`，`symbol`，`null`或`undefined`之外的类型。

  使用`object`类型，就可以更好的表示像`Object.create`这样的API。例如：

  ```ts
  declare function create(o: object | null): void;

  create({ prop: 0 }); // OK
  create(null); // OK

  create(42); // Error
  create("string"); // Error
  create(false); // Error
  create(undefined); // Error
  ```

- 类型断言

  有时候你会遇到这样的情况，你会比TypeScript更了解某个值的详细信息。 通常这会发生在你清楚地知道一个实体具有比它现有类型更确切的类型。

  通过*类型断言*这种方式可以告诉编译器，“相信我，我知道自己在干什么”。 类型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和解构。 它没有运行时的影响，只是在编译阶段起作用。 TypeScript会假设你，程序员，已经进行了必须的检查。

  类型断言有两种形式。 其一是“尖括号”语法：

  ```ts
  let someValue: any = "this is a string";

  let strLength: number = (<string>someValue).length;
  ```

  另一个为`as`语法：

  ```ts
  let someValue: any = "this is a string";

  let strLength: number = (someValue as string).length;
  ```

  两种形式是等价的。 至于使用哪个大多数情况下是凭个人喜好；然而，当你在TypeScript里使用JSX时，只有 `as`语法断言是被允许的。

- 关于`let`

  你可能已经注意到了，我们使用`let`关键字来代替大家所熟悉的JavaScript关键字`var`。 `let`关键字是JavaScript的一个新概念，TypeScript实现了它。 我们会在以后详细介绍它，很多常见的问题都可以通过使用 `let`来解决，所以尽可能地使用`let`来代替`var`吧。
