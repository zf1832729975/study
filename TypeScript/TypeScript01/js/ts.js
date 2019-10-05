"use strict";
// number
// Number
// String
// Array
// null
// undefined
var num = 1234;
var str = "string";
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = new Student("Jane", "M.", "User");
document.body.innerHTML = greeter(user);
var numArr = [1, 2, 4, 6];
var strArr = ['234', 'asdf', 'asdf'];
var list = [1, 2, 3];
var Color;
(function (Color) {
    Color["red"] = "234";
    Color["green"] = "asdf";
    Color["blue"] = "asdf";
})(Color || (Color = {}));
Color.red;
