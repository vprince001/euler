const lib = require("../euler_lib.js");
const addMultiples = lib.addMultiples;

const main = function(){
  let firstNumber = +process.argv[2];
  let secondNumber = +process.argv[3];
  let limit = +process.argv[4];
  console.log(addMultiples(firstNumber,secondNumber,limit));
}

main();
