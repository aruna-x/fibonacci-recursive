function fibonacci(n, a=0, b=1) {
  // if(n===0) return a;
  // if(n>0) {
  //   return fibonacci(n-1,b,a+b)
  // }

  // another solution
  switch(n){
    case 0:
      return 0;
    case 1:
      return 1;
    default:
      return fibonacci(n-1) + fibonacci(n-2);
  }

  // additional challenge
  // if n<100, must only have max 4 recusive calls
  /**
   * 0 a b
   * 1 b a+b
   * 2 a+b a+2b
   * 3 a+2b 2a+3b
   * 4 2a+3b 3a+4b
   */
}

if (require.main === module) {
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 2");
  console.log("=>", fibonacci(3));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));

  console.log("");

  console.log("Expecting: ");
  console.log("=>", fibonacci(6));

  console.log("");

  console.log("Expecting: ");
  console.log("=>", fibonacci(12));
}

module.exports = fibonacci;

/**
 * 
 */
