function fib(n) {
  // Stop condition
  if (n == 0) return 0;

  // Stop condition
  if (n == 1 || n == 2) return 1;
  // Recursion function
  else return fib(n - 1) + fib(n - 2);
}
let n = 5;
console.log(`Fibonacci series of ${n} numbers is:`);

for (let i = 0; i < n; i++) {
  console.log(fib(i));
}



function factorial(n) {
  // Stop condition
  if (n == 0 || n == 1) return 1;
  // Recursion function
  else return n * factorial(n - 1);
}

console.log(`Factorial of ${n} numbers is: ${factorial(n)}`);

