function fibonacci(n) {
  switch(n){
    case 0:
      return 0;
    case 1:
      return 1;
    default:
      return fibonacci(n-1) + fibonacci(n-2);
  }
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

/**
 * 1. paraphrase
 * 
 * find the nth element in the fib sequence using recursion
 * 
 * 2. tests
 * 
 * fine as is
 * 
 * 3. pseudocode
 * 
 * f(n) = f(n-1) + f(n-2)
 * base cases: f(0) = 0, f(1) = 1. 
 * these are all we need to build fib
 * 
 * 4. code (above)
 * 5. refactor
 * 6. optimize
 */
