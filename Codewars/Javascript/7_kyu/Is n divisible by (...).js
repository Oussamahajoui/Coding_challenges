// Description:
// Create a function that checks if the first argument n is divisible by all other arguments (return true if no other arguments)

// Example:

// (6,1,3)--> true because 6 is divisible by 1 and 3
// (12,2)--> true because 12 is divisible by 2
// (100,5,4,10,25,20)--> true
// (12,7)--> false because 12 is not divisible by 7

// My Solution:
function isDivisible(val, ...args) {
  const values = [...args];
  for (const c of values) {
    if (val % c !== 0) {
      return false;
    }
  }
  return true;
}
