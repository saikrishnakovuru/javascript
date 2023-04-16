"use strict";

// function Person(firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// }

// Person.prototype.calcAge = function () {
//   console.log(2023 - this.birthYear);
// };
class Person {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  calcAge() {
    console.log(2023 - this.birthYear);
  }
}

const jonas = new Person("jonas", 1990);
jonas.calcAge();
