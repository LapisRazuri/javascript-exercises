const add = function( num1, num2 ) {
  return num1 + num2 ;
	
};

const subtract = function(num1, num2) {
  return num1 - num2 ;
	
};

const sum = function( array ) {
  let result = 0;

  for (let i = 0; i < array.length; i++ ) {
    result += array[i];    

  }
  return result;
	
};

const multiply = function( ...args ) {
  let result = 1;

  for (let i = 0; i < args.length; i++ ) {
    result *= args[i];

  }
  return result;

};

const power = function( num, power ) {
  let result = 1;

  for (let i = 0; i < power; i++ ) {
    result *= num;
    
  }
  return result;
	
};

const factorial = function( num ) {
  let result = 1;
  for (let i = 1; i <= num; i++ ) {
    result *= i;

  }

  return result;
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
