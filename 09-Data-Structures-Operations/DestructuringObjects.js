"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order(starterMenuIndex, mainMenuIndex) {
    return [this.starterMenu[starterMenuIndex], this.mainMenu[mainMenuIndex]];
  },
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

  //logging the object rightaway
  orderDeliveryTest(obj) {
    console.log(obj);
  },

  //deconstructing the object
  orderDeliveryTest2: function ({ age, name }) {
    console.log(age, name);
  },
};

//          calling method in object

// const orderItems = restaurant.order(2, 0);
// console.log(orderItems);

//          passing object to method
restaurant.orderDeliveryTest({
  name: "reddy",
  age: 35,
});

//        passing object to method and deconstructiong there

restaurant.orderDeliveryTest2({
  name: "reddy",
  age: 35,
});

//           use propertey names rightaway

// const { name, categories, openingHours } = restaurant;
// console.log(name, categories, openingHours);

//            using custom variable names

const {
  name: hotelName,
  categories: cata,
  openingHours: workingHrs,
} = restaurant;
// console.log(hotelName, cata, workingHrs);

//               default values

const { ownerName = {}, name } = restaurant;
// console.log(ownerName);
// console.log(name);

//              mutating variables
