"use strict";

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposits = movements.filter((val) => val > 0);
const withdrawls = movements.filter((val) => val < 0);
console.log(`deposits ${deposits} withdrawls ${withdrawls}`);
