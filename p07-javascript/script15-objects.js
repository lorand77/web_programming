"use strict";

const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

const person2 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

const person3 = {
  firstName: "John",
  lastName : "Doe",
  age      : 50,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};

console.log(person.firstName);
console.log(person['lastName']);
console.log(person2.firstName);
console.log(person2['age']);
console.log(person3.fullName());

let x = {};
x.hahaha = 'hahaha';
console.log(x.hahaha); // undefined, because x is a primitive value and cannot have properties

console.log(person3.gender); // undefined, because the property

delete person2.age;
console.log(person2.age); // undefined, because the property has been deleted

let result = ("firstName" in person);
console.log(result);


const person4 = {
  firstName: "John",
  lastName : "Doe",
  age      : 50,
  fullName : () => this.firstName + " " + this.lastName   // arrow function does not have its own 'this' context, so it will not work as expected
};
console.log(person4.fullName()); // undefined undefined, because arrow functions do not have their own 'this' context

console.log(this);
console.log(person4);



function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
  this.nationality = "English";
    this.fullName = function() {
    return this.firstName + " " + this.lastName;
  };
}

const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");
const mySister = new Person("Anna", "Rally", 18, "green");

console.log(myFather.firstName);
console.log(myMother.firstName);
console.log(mySister.firstName);
console.log(myFather.nationality);
console.log(myMother.nationality);
console.log(mySister.nationality);
console.log(myFather.fullName());

myFather.firstName = "Mike";
myFather.nationality = "American";
console.log(myFather.firstName);
console.log(myFather.nationality);
