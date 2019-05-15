const lib = require("./lib_euler.js");
const addEvenFibonacci = lib.addEvenFibonacci;

const main = function(){
  let limit = +process.argv[2];
  console.log(addEvenFibonacci(limit));
}

main();
