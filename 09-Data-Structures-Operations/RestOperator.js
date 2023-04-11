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

  orderPizza(mainItem, ...optionalItems) {
    console.log(mainItem, optionalItems);
  },
};

// 1)  Destructuring
//=================================================================
const [pizza, , risotto, ...otherFoods] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
// console.log(otherFoods);

const { sat, ...otherDays } = restaurant.openingHours;
console.log(otherDays);
//=================================================================

//    2)Functions
const add = function (...numbers) {
  //          modern java script
  // console.log(numbers.reduce((a, b) => a + b));

  // normal way of adding array elements
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3);
add(3, 6, 7);
add(1, 8, 4, 6, 9);

//=================================================================
//passing values to ret operator
restaurant.orderPizza("chicken", "onions", "lattse");
//=================================================================

//=================================================================

//=================================================================
