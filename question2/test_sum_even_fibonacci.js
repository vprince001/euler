const assert = require("assert");
const addEvenFibonacci = require("../euler_lib").addEvenFibonacci;

let inputs = [10,20,50,200];
let outputs = [10,10,44,188];
let testNumber = 1;

for(index in inputs){
  assert.equal(addEvenFibonacci(inputs[index]), outputs[index]);
  console.log("Test:",testNumber,"Passed");
  testNumber++;
}
