"use strict";

function Person(firstName, birthYear) {
  this.firstName = firstName;
  this.birthyear = birthYear;
  console.log(this);
}

new Person("jonas", 1990);
