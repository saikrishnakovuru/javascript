"use strict";

const workWeeks = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const openingHours = {
  [workWeeks[0]]: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours,
};

const rest = new Map();
rest.set("name", "sai");
rest.set(1, "adsf");
rest.set(2, "qwer");

rest
  .set("catagories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 9)
  .set(true, "we are open")
  .set(false, "we are closed");

// console.log(rest);

//=============================   A   ====================================

// another way of writing map

/*  below representation is array of array representation */
const quizz = new Map([
  ["question", "which is the best programming language"],
  [1, "c"],
  [2, "java"],
  [3, "javaScript"],
  ["correct", 3],
  [true, "Correct answer"],
  [false, "Try again later"],
]);

console.log(quizz.get("question"));

for (const [key, value] of quizz) {
  if (typeof key === "number") {
    console.log(`${key} : ${value}`);
  }
}

// const answer = Number(prompt("please type your option"));
const answer = 3;
console.log(quizz.get(quizz.get("correct") === answer));

// console.log(` answer entred is ${answer}`);
// if (quizz.get("correct") === answer) {
// }
// console.log(quizz);
//===============================  A   ==================================

//=================================================================
//converting objects to map

/* when we log the below lone the o/p will be in the form of array of arrays 
since the code inside block A is also an array of array representation, objects can be converted into
maps easily.
*/
// console.log(Object.entries(openingHours));
//here we converted object to map.
const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

//=================================================================
console.log([...quizz]);
console.log(quizz.keys());
