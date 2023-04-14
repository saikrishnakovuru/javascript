"use strict";

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const balance = movements.reduce((a, b) => a + b, 0);
console.log(balance);

//finding the max value in the array using reduce

const maxVal = movements.reduce((accumulator, mov) => {
  if (accumulator > mov) return accumulator;
  else return mov;
}, movements.at(0));
console.log(maxVal);
