// My first try

// const fs = require("fs");
// let array = fs.readFileSync("day3Input.txt", "utf-8").split("\n");

// let countTrees = [];

// function calcTrees(array, right, down) {
//   let j = -right;
//   let counter = 0;
//   for (let i = 0; i < array.length; i += down) {
//     j += right;
//     j > 30 ? (j -= 31) : "";
//     array[i][j] === "#" ? counter++ : "";
//     i === array.length - 1 ? countTrees.push(counter) : "";
//   }
//   console.log(countTrees);
// }

// function calcTotal(array) {
//   let total = 1;
//   for (let i = 0; i < array.length; i++) {
//     total *= array[i];
//   }
//   console.log(total);
// }

// calcTrees(array, 1, 1);
// calcTrees(array, 3, 1);
// calcTrees(array, 5, 1);
// calcTrees(array, 7, 1);
// calcTrees(array, 1, 2);
// calcTotal(countTrees);

// Hampus day 3
// const input = require("fs").readFileSync("day3Input.txt", "utf-8").split("\n");

// const result1 = input
//   .map((line, i) => line[(i * 3) % line.length])
//   .filter((char) => char === "#").length;

// const result2 = [
//   [1, 1],
//   [3, 1],
//   [5, 1],
//   [7, 1],
//   [1, 2],
// ]
//   .map(function ([x, y]) {
//     return input
//       .filter((_, i) => i % y === 0)
//       .map((line, i) => line[(i * x) % line.length])
//       .filter((char) => char === "#").length;
//   })
//   ;

// console.log(result1, result2);

// Hampus day3
const array = require("fs")
  .readFileSync("day3Input.txt", "utf-8")
  .split("\n")
  .map((line) => line.trim());

const result1 = array
  .map((line, i) => line[(i * 3) % line.length])
  .filter((x) => x === "#").length;

const result2 = [
  [1, 1],
  [3, 1],
  [5, 1],
  [7, 1],
  [1, 2],
]
  .map(
    ([x, y]) =>
      array
        .filter((_, i) => i % y === 0)
        .map((line, i) => line[(i * x) % line.length])
        .filter((char) => char === "#").length
  )
  .reduce((acc, count) => acc * count);

console.log(result1, result2);
