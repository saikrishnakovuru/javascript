"use strict";

// function logger() {
//   return `logger function`;
// }

// function fruitProcessor(orange, apple) {
//   // return "oranges are " + orange + " and " + "appels are " + apple;
//   return `oranges are  ${orange} and appels are ${apple}`;
// }

// const count = fruitProcessor(2, 1);
// console.log(count);
// console.log(logger());

// const num = Number("12");
// console.log(num);

// function calcAge1(birthYear) {
//   console.log(birthYear);
// }

// const calcAge2 = function (birthYear) {
//   console.log(birthYear);
// };

// const calcAge3 = (birthYear) => {
//   console.log(birthYear);
// };

// calcAge2(21);
// calcAge2(24);
// calcAge3(25);

// const friends = ['sai', 'pb', 'manda'];

// const poppedFriend = friends.shift();
// console.log(poppedFriend);

// const jonas = {
//   name: "Jonas",
//   numberOfFriends: 3,
//   birthYear: 1990,
//   bestFriend: "Micheal",
//   calcAge() {
//     this.age =  2023 - jonas.birthYear;
//     // return this.age;
//   },
//   job: "java developer",
// };

// console.log(jonas.calcAge());
// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep}`);
// }

const jonasArray = ["Jonas", 3, 1990, "Micheal", ["sai", "pb", "manda"]];
const typesArray =[];

for (let i = 0; i < jonasArray.length; i++) {
  console.log(jonasArray[i]);
  typesArray.push(typeof jonasArray[i]);
}

console.log(typesArray)

console.log();
