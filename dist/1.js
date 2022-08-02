"use strict";
let a = undefined;
let color;
color = 'green';
console.log(color, 'color');
let arr = [1, 2, 3];
let arr2 = [1, 2, 3];
console.log(arr);
console.log(arr2);
let arr3 = ['hh', 2];
console.log(arr3);
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 1] = "Male";
    Gender[Gender["Femal"] = 6] = "Femal";
})(Gender || (Gender = {}));
let i;
i = {
    name: 'hh',
    gender: Gender.Femal
};
console.log(i);
let someValue = "this is a string";
someValue = 11;
let strlength = someValue.length;
console.log(strlength);
class Stu {
    constructor(name) {
        this.name = name;
    }
    say() {
        console.log('kkk');
    }
}
console.log(new Stu('name'));
function test(a, b) {
    return b;
}
test(1, 'hh');
