let a: void = undefined;
let color: 'red' | 'green' | 'blue';
color = 'green'
console.log(color, 'color');
let arr: number[] = [1, 2, 3];
let arr2: Array<number> = [1, 2, 3];
console.log(arr);
console.log(arr2);
let arr3: [string, number] = ['hh', 2]; //tuple
console.log(arr3);
enum Gender {
  Male = 1,
  Femal = 6
}
let i: { name: string, gender: Gender }
i = {
  name: 'hh',
  gender: Gender.Femal
}
console.log(i)
let someValue: unknown = "this is a string";
someValue = 11;
let strlength: number = (<string>someValue).length;
console.log(strlength);
// public、protected、private
// class Person {
//   protected name: string;
//   protected age: number;
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
//   sayHello() {
//     console.log(this.name)
//   }
// }
// class Employ extends Person {
//   constructor(name: string, age: number){
//     super(name, age);
//     this.name = name;//子类中可以修改
//   }
// }
// const p = new Person('hh', 18);
// p.sayHello();
// class Person {
//   private _name: string;
//   static PI = 3.14
//   constructor(name: string) {
//     this._name = name;
//   }
//   get name() {
//     console.log(this._name)
//     return this._name;
//   }
//   set name(name:string){
//     this._name = name;
//   }
// }
// const p = new Person('hh');
// console.log(p.name);
// p.name = 'jj';
// console.log(Person.PI)
// abstract class Animal{
//   abstract run(): void;
//   bark(){
//       console.log('动物在叫~');
//   }
// }

// class Dog extends Animal{
//   run(){
//       console.log('狗在跑~');
//   }
// }
interface Person {
  name: string,
  say(): void
}
// function fn(per:Person){
//   per.say()
// }
// fn({name:'hh',say(){console.log('hhhh')}})
class Stu implements Person {
  constructor(public name: string) {
  }
  say(): void {
    console.log('kkk')
  }
}
console.log(new Stu('name'))

function test<T, K>(a: T, b: K): K {
  return b
}
test<number,string>(1,'hh');