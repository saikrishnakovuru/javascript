"use strict";

//one way of wrting with out call function
//===========================================================
function greeting(name, age) {
  this.name = name;
  this.age = age;
  // console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
}

const person1 = {
  greeting,
};

const person2 = {
  greeting,
};

person1.greeting("Alice", 30);
person2.greeting("Bob", 25);

//===========================================================

const lufthansa = {
  alrline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked flight in ${this.alrline} and the ticket number is ${this.iataCode}${flightNum}`
    );

    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

// lufthansa.book(23, "mia");
// console.log(lufthansa);

const airIndia = {
  alrline: "Air India",
  iataCode: "AI",
  bookings: [],
};

const indiaWings = {
  alrline: "India wings",
  iataCode: "IW",
  bookings: [],
};

const book = lufthansa.book;
book.call(lufthansa, 56, "mia");
book.call(airIndia, 78, "Lisa");
book.call(airIndia, 51, "elfie");
book.call(indiaWings, 45, "tori");

console.log(lufthansa);
console.log(airIndia);
console.log(indiaWings);
