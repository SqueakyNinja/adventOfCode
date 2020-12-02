// part 1

const fs = require("fs");
let array = fs.readFileSync("day2Input.txt", "utf-8").split("\n");

function searchPassword(array) {
  let passwordArray = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    let object = {
      amountReq: element.split(" ")[0].split("-"),
      letterReq: element.split(" ")[1].replace(/:/g, ""),
      password: element.split(" ")[2].replace(/\r/g, ""),
    };

    let newArray = [];

    for (let j = 0; j < object.password.length; j++) {
      const element = object.password[j];
      if (element === object.letterReq) {
        newArray.push(element);
      }
    }

    if (
      newArray.length >= object.amountReq[0] &&
      newArray.length <= object.amountReq[1]
    ) {
      passwordArray.push(object);
    }
  }
  console.log(passwordArray.length);
}
searchPassword(array);

// part 2
function searchPasswordByLocation(array) {
  let passwordArray = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];

    let object = {
      amountReq: element.split(" ")[0].split("-").map(Number),
      letterReq: element.split(" ")[1].replace(/:/g, ""),
      password: element.split(" ")[2].replace(/\r/g, ""),
    };

    let firstLetter = object.password[object.amountReq[0] - 1];
    let secondLetter = object.password[object.amountReq[1] - 1];

    if (
      (firstLetter === object.letterReq && secondLetter !== object.letterReq) ||
      (firstLetter !== object.letterReq && secondLetter === object.letterReq)
    ) {
      passwordArray.push(object);
    }
  }
  console.log(passwordArray.length);
}

searchPasswordByLocation(array);
