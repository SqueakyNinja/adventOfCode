const fs = require("fs");
let array = fs.readFileSync("day1Input.txt", "utf-8").split("\n").map(Number);

function calc2020(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    array.find((number) => {
      if (number + array[i] === 2020 && !newArray.includes(number)) {
        newArray.push(number, array[i]);
      }
    });
  }
  console.log(newArray);
  console.log(newArray[0] * newArray[1]);
  return newArray[0] * newArray[1];
}
calc2020(array);

// Part 2
function calc2020By3(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    array.find((x) => {
      for (let j = 0; j < array.length; j++) {
        const y = array[j];
        if (x + y + array[i] === 2020 && !newArray.includes(x)) {
          newArray.push(x, y, array[i]);
        }
      }
    });
  }
  console.log(newArray);
  console.log(newArray[0] * newArray[1] * newArray[2]);
  return newArray[0] * newArray[1];
}
calc2020By3(array);
