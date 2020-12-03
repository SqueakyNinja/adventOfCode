const fs = require("fs");
let array = fs.readFileSync("day3Input.txt", "utf-8").split("\n");

let countTrees = [];

function calcTrees(array, right, down) {
  let j = -right;
  let counter = 0;
  for (let i = 0; i < array.length; i += down) {
    j += right;
    j > 30 ? (j -= 31) : "";
    array[i][j] === "#" ? counter++ : "";
    i === array.length - 1 ? countTrees.push(counter) : "";
  }
}

function calcTotal(array) {
  let total = 1;
  for (let i = 0; i < array.length; i++) {
    total *= array[i];
  }
  console.log(total);
}

calcTrees(array, 1, 1);
calcTrees(array, 3, 1);
calcTrees(array, 5, 1);
calcTrees(array, 7, 1);
calcTrees(array, 1, 2);
calcTotal(countTrees);
