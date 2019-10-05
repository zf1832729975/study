declare var num: number;
declare let str: string;
declare class Student {
    firstName: string;
    middleInitial: string;
    lastName: string;
    fullName: string;
    constructor(firstName: string, middleInitial: string, lastName: string);
}
interface Person {
    firstName: string;
    lastName: string;
}
declare function greeter(person: Person): string;
declare let user: Student;
declare let numArr: number[];
declare let strArr: string[];
declare let list: Array<number>;
declare enum Color {
    red = "234",
    green = "asdf",
    blue = "asdf"
}
