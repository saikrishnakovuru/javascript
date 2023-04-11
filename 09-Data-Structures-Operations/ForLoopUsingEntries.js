"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
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
  },

  orderPizza: function (ingrediant) {},
};

//=================================================================
const add = function (...numbers) {
  //normal for loop
  // for (let i = 0; i < numbers.length; i++) console.log(numbers[i]);

  //enhanced type of for loop
  for (const item of numbers) {
    // console.log(item);
  }

  //arrow function.
  // numbers.forEach((n) => console.log(n));
};

// this print function can be used inside forEach instread of arrow function.
// function print(values) {
//   console.log(values);
// }

add(1, 8, 4, 6, 9);
//=================================================================

//        using entries to get both index and also the element.
//=================================================================
//used destructuring
const entriesTest = (...numbers) => {
  for (const [keyValue, keyValuePair] of numbers.entries()) {
    console.log(`${keyValue + 1} : ${keyValuePair}`);
  }
};

entriesTest("one", "two", "three", "four", "five", "six");

//=================================================================
