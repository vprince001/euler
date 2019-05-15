const assert = require("assert");
const addMultiples = require("../euler_lib.js").addMultiples;

let inputs = [[3,5,10], [4,5,20], [0, 5, 10]];
let outputs = [23, 70, 5];
let testNumber = 1;

for(index in inputs){
  assert.equal(outputs[index], addMultiples(inputs[index][0], inputs[index][1], inputs[index][2]));
  console.log("Test: " + testNumber + " Passed");
  testNumber++;
}
