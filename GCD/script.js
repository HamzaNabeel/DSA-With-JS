// Write a program to find greatest common divisor (GCD) or highest common factor (HCF) of given two numbers.



// Function to find GCD of two numbers
function findGCD(a, b) {
  // Make sure we work with positive integers
  a = Math.abs(a);
  b = Math.abs(b);

  // Euclidean algorithm
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

// Example usage:
const num1 = 56;
const num2 = 98;

console.log(`The GCD (HCF) of ${num1} and ${num2} is ${findGCD(num1, num2)}`);
