function fibonacci(fibonacci) {
    let n1 = 0;
    let n2 = 1;
    let nextTerm;
  
    console.log('Fibonacci Series:');
    console.log(n1); // print 0
    console.log(n2); // print 1
  
    nextTerm = n1 + n2;
  
    while (nextTerm <= fibonacci) {
      // print the next term
      console.log(nextTerm);
  
      n1 = n2;
      n2 = nextTerm;
      nextTerm = n1 + n2;
    }
  }
  
  // Example usage
  fibonacci(50); // Generate Fibonacci series up to the number 50
  
// Do not edit below this line
module.exports = fibonacci;
