// Description:
// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

// My Solution:
export function capitalize(s: string): [string, string] {
  let evenOnes: string = s
    .split("")
    .map((e, idx) => (idx % 2 === 0 ? e.toUpperCase() : e))
    .join("");
  let oddOnes: string = s
    .split("")
    .map((e, idx) => (idx % 2 === 1 ? e.toUpperCase() : e))
    .join("");
  return [evenOnes, oddOnes];
}
