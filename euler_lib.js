const addMultiples = function(firstNumber,secondNumber,limit){
  let sum = 0;
  for(let number = 2; number < limit; number++){
    if(number%firstNumber == 0 || number%secondNumber == 0){
      sum = sum + number;
    }
  }
  return sum;
}

const addEvenFibonacci = function(limit){
  let sum = evenSum = 0;
  let firstTerm = 1;
  let secondTerm = 2;
  
  while(sum<limit){
    sum = firstTerm+secondTerm;
    firstTerm = secondTerm;
    secondTerm = sum;
    if(firstTerm%2 == 0){
      evenSum += firstTerm;
    }
  }
  return evenSum;
}

exports.addMultiples = addMultiples;
exports.addEvenFibonacci = addEvenFibonacci;
