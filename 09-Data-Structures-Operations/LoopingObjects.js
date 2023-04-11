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

const keys = Object.keys(openingHours);
console.log(keys);

const values = Object.values(openingHours);
console.log(values);

const entries = Object.entries(openingHours);
console.log(entries);
