"use strict";

const bookings = [];

function createBooking(
  flightNum,
  numPassengers = 1,
  price = 250 * numPassengers
) {
  //using enhanced object literal stuff here
  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  console.log(booking);
  bookings.push(booking);
}

createBooking("A320");
createBooking("A320", 2);
console.log(bookings);
