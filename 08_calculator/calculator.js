const add = function(a,b) {
	 return a + b;
}
 let result = add(2,3);
 console.log(result)



 
	const subtract = function(c,d)  {
    return c - d;
 
 
};
let resultt = subtract(5,3);
console.log(resultt)

const sum = function(array) {
  let sumup= 0;

  /*loop over array and add each item to sum
   */
  for (const item of array) {
    sumup += item;
  }

  // return the result
  console.log(sumup);
  return sumup;
	
};

sum([1, 4, 0, 9, -3]); //logs 11












const multiply = function(e, f) {
  return e * f;
}

let resultd = multiply(5, 3);
console.log(resultd);


const power = function(base, exponent) {
  let result = 1;

  for (let i = 0; i < exponent; i++) {
    result *= base;
  }

  return result;
};

let base = 2;
let exponent = 3;
let resulttt = power(base, exponent);
console.log(resulttt);

//In this code, the power function takes two parameters: base and exponent. It calculates the result of raising base to 
//the power of exponent using a loop. The initial value of result is set to 1, and then the loop multiplies base by itself exponent times to get the final result. The function returns the computed result.




const factorial = function(n) {
  if (n === 0 || n === 1) {
    return 1;
  }

  let result = 1;

  for (let i = 2; i <= n; i++) {
    result *= i;
  }

  return result;
};

let n = 5;
let resu = factorial(n);
console.log(resu);

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
