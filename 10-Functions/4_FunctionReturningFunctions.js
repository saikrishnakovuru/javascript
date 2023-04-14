"use strict";

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

const greet = (greeting) => (name) => console.log(`${greeting} ${name}`);

const wish = greet("hello");
wish("jonas");

greet("hi")("sai");
