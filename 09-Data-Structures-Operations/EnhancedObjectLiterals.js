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

console.log(restaurant.openingHours.tue.open);

// we have 3 enhanced object literals

//1) If we need one object in another object we can right away used that
//=============================================================================
// We used openingHours in restaurant
// console.log(restaurant);

/*before es6 we use to write 
openingHours : openingHours in restaurent as well but now we can right away write openinghours */
//=============================================================================

//2) writing method in the object
/*earlier, the function syntax in the object is 
orderPizza: function(ingrediant){}

but now we can right away write 
orderPizza(){}*/

// 3)
// computing the property names in the object
/*look into the workingHours object we computed one property name instead of writing it manually
this would be helpful in realworld applications.*/
