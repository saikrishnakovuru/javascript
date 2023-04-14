"use strict";

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

//********************************************
/* Here is teh main part of the bind method 
    book.bind(lufthansa) returns the new function where this keyword is bound.
*/
// const book = lufthansa.book;
const bookLufthansa = lufthansa.book.bind(lufthansa);

//********************************************
const bookAirIndia = lufthansa.book.bind(airIndia);
const bookIndiaWings = lufthansa.book.bind(indiaWings);

bookLufthansa(12, "lisa");

console.log(lufthansa);

//=====================With eventListeners ===================
lufthansa.planes = 90;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

/* If we just don't use the line 
           lufthansa.buyPlane.bind(lufthansa)
    conole.log(this) --> returns the object of querySelector which is HTML element
    so, we set it to 

  */

document
  .querySelector(".buy")
  .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

//=====================With eventListeners ===================

//=====================partial application ===================

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.21);
console.log(addVAT(200));

//let's write the above method using fuctoin inside function
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addTaxRate(0.21)(200);
console.log(addVAT2);

// anotehr way
const addVAT3 = addTaxRate(0.21);
console.log(addVAT3(200));
console.log(addVAT3(300));
// =====================partial application ===================
