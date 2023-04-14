"use strict";

const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

//higher order function
const transfer = function (str, fn) {
  console.log(` Function name is ${fn.name}`);
  console.log(`${fn(str)}`);
};

transfer("javaScript is great!", upperFirstWord);
transfer("javaScript is great!", oneWord);

/*
upperFirstWord and oneWord are call back functions here
*/
