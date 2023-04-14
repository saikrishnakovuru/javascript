"use strict";

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// calculate the sum of deposits alone
const deposits = movements
  .filter((mov) => mov > 0)
  .reduce((acc, mov) => acc + mov, 0);
console.log(deposits);

//converting each positive value to USD bu multiplying everything with 1.1
const sumOfCurrencyInUSD = movements
  .filter((mov, i, arr) => {
    // console.log(arr);
    return mov > 0;
  })
  .map((mov, i, arr) => {
    // console.log(arr);
    return mov * 1.2;
  })
  .reduce((acc, mov) => {
    // console.log(acc, mov);
    return acc + mov;
  }, 0);
console.log(sumOfCurrencyInUSD);
