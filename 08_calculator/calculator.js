const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numbers) {
  return numbers.reduce((total, number) => {
    return total + number;
  }, 0)
};



const multiply = function(numbers) {
  return numbers.reduce((total, number) => {
    return total * number;
  })
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(a) {
  if (a === 0 || a === 1) return 1;
  return a * factorial(a - 1);
};

const empty = 5;
console.log(factorial(empty));

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
