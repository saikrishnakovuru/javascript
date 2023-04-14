"use strict";

const flight = "L540";
const passengerDetails = {
  name: "sai",
  passport: 25353,
};

const checkIn = (flightNum, passenger) => {
  // console.log(flight);
  // console.log(passengerDetails);
  flightNum = "B009";
  passenger.name = "Mr. " + passenger.name;

  if (passenger.passport === 25353) {
    console.log("check in!");
  } else {
    console.log("wrong passport number");
  }
};

checkIn(flight, passengerDetails);
console.log(flight); // L540
console.log(passengerDetails);

/* Here we notice that the flight has not been changed but the name gets appended with Mr.
   this is because,
   --> flight is primitive and (passed by value) Passing by value means that a copy of the value is created and passed to the function. Any changes made to the parameter inside the function do not affect the original value outside the function

   -->passengerDetails is non-primitive as it is an object (passed by reference) that means that a reference to the original object or array is passed to the function, rather than creating a copy of the entire object.
   This means that changes made to the object or array inside the function will affect the original object or array outside the function.

  primitive -> string, number, boolean
  non-primitive --> arrays, objects.
   
  ******************************************************
  To cut long story short primitive values donot get changed outside the function where as the non-primitive does.
  primitive creates copy and non-primitive creates reference.
  ******************************************************
  
  We have to be more careful while working with long data with objects as they gets changed if any body un nowingly make changes in further.
*/
