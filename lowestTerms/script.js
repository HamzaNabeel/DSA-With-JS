// Take as input a fraction in the form a/b. Convert the same into lowest terms and print. 
// (Lowest terms examples 3/12 = 1/4). 


function reduceFraction(input) {
  // input is a string like "3/12"
  const [aStr, bStr] = input.split('/');
  let a = parseInt(aStr, 10);
  let b = parseInt(bStr, 10);

  if (isNaN(a) || isNaN(b) || b === 0) {
    console.log("Invalid fraction");
    return;
  }

  // Helper function to find GCD (Greatest Common Divisor)
  function gcd(x, y) {
    return y === 0 ? x : gcd(y, x % y);
  }

  const divisor = gcd(Math.abs(a), Math.abs(b));
  a = a / divisor;
  b = b / divisor;

  console.log(`${a}/${b}`);
}

// Example usage:
reduceFraction("3/12"); // Output: 1/4
reduceFraction("24/36"); // Output: 2/3
reduceFraction("10/5");  // Output: 2/1
