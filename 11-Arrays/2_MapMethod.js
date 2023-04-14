"use strict";

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const euroToUsd = 1.1;

const convertedCurrency = movements.map((convert) => convert * euroToUsd);
console.log(convertedCurrency);
