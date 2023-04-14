"use strict";

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//=========================== Normal for of ===============================

// for (const movement of movements) {
//   if (movement > 0) {
//     console.log(`deposited ${movement}`);
//   } else {
//     console.log(`debited ${Math.abs(movement)}`);
//   }
// }
//============================ Normal for of ===============================

//============================ Used arror function ===============================
movements.forEach((movement, index, arr) => {
  if (movement > 0) {
    console.log(`Transaction ${index + 1} Credited with ${movement}`);
  } else {
    console.log(`Transaction ${index + 1} Debited with ${Math.abs(movement)}`);
  }
});

//============================ Used arror function ===============================
