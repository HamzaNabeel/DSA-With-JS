// var plusOne = function(digits) {
    
// };

// My solution

var plusOne = function(digits) {
    const a = parseInt(digits.join("")) + 1;
    return String(a).split('').map(Number)
};


// Accepted solution 


// var plusOne = function(digits) {
//      return (BigInt(digits.join("")) + BigInt(1)).toString().split("").map(i=>Number(i))
// };