const array = require("fs")
  .readFileSync("day4Input.txt", "utf-8")
  .replace(/\r\n/g, " ")
  .split("  ")
  .map((x) => x.split(" ").sort());
console.log(array);
const result1 = array.filter(
  (eachPassport) =>
    eachPassport.filter((eachRow) => eachRow.substring(0, 3) !== "cid").length >
    6
);
let newArray = [];
for (let i = 0; i < array.length; i++) {
  const eachPassport = array[i];
  if (eachPassport[1].substring(0, 3) === "cid") {
    eachPassport.splice(1, 1);
  }

  for (let eachRow = 0; eachRow < eachPassport.length; eachRow++) {
    const element = eachPassport;
    if (
      element[0].substring(0, 3) === "byr" &&
      element[0].substring(8, 4) >= "1920" &&
      element[0].substring(8, 4) <= "2002" &&
      element[1].substring(0, 3) === "iyr" &&
      element[1].substring(8, 4) >= "2010" &&
      element[1].substring(8, 4) <= "2020" &&
      element[2].substring(0, 3) === "eyr" &&
      element[2].substring(8, 4) >= "2020" &&
      element[2].substring(8, 4) <= "2030" &&
      element[3].substring(0, 3) === "byr" &&
      element[3].substring(8, 4) >= "1920" &&
      element[3].substring(8, 4) <= "2002" &&
      ((element[4].substring(0, 3) === "hgt" &&
        element[4].substring(9, 7) === "cm" &&
        element[4].substring(7, 4) <= "193" &&
        element[4].substring(7, 4) >= "150") ||
        (element[4].substring(0, 3) === "hgt" &&
          element[4].substring(8, 6) === "in" &&
          element[4].substring(6, 4) <= "76" &&
          element[4].substring(6, 4) >= "59")) &&
      /hcl:#[a-f0-9]{6}/.test(element[5]) &&
      /ecl:(amb|blu|brn|grn|gry|hzl|oth)/.test(element[6]) &&
      /pid:[0-9]{9}\b/.test(element[7])
    ) {
      newArray.push(element);
      // console.log(element[eachRow]);
    }
  }
}
console.log(newArray);
// console.log(result1.length);
