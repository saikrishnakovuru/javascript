"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  orderPasta(ing1, ing2, ing3) {
    console.log(`pasta comes only with ${ing1} ,${ing2} and ${ing3}`);
  },
};

//spread operator in methods
//==================================================================================
const ingrediants = [
  prompt("please enter ingrediant 1"),
  prompt("please enter ingrediant "),
  prompt("please enter ingrediant 3"),
];

restaurant.orderPasta(...ingrediants);
//==================================================================================

//Spread Operator
//==================================================================================
const arr = [3, 4, 5, 6];

//The below newArr crates a new sub array in between but don't combine the arrays.
const newArr = [1, 2, arr, 7];

//To combine the values we use spread poperator
const spreadArr = [1, 2, ...arr];
console.log(spreadArr);

//==================================================================================

//copy arrays
//==================================================================================
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);
//==================================================================================

//join 2 arrays
//==================================================================================
const joinArrays = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(joinArrays);
//==================================================================================
