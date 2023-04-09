// let js = "amazing";
// console.log(12 + 34 + 9 - 4);

// let name = true;
// console.log(typeof name);

// const markWeight = 78;
// const markHeight = 1.69;
// const johnWeight = 92;
// const johnHeight = 1.95;

// console.log(
//   markWeight / markHeight ** 2,
//   johnWeight / (johnHeight * johnHeight)
// );

//============= string and template liteals================
// const firstName = "Jonas";
// const job = "teacher";
// const birthYear = 1991;
// const year = 2023;

// const joans =
//   "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job;
// console.log(joans);

// const joansNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}`;
// console.log(joansNew);

//============== type coercion ================================
// console.log("22" * 2);
// console.log("22" * "2");

// ============== double vs triple equality ================================

let a = 10;
if (a == "10" && a === 10) {
  console.log("equal");
}
