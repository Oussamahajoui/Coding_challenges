// Description:
// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]

// My Solution:
export function between(a: number, b: number): number[] {
  let res: number[] = [];
  for (let i = a; i <= b; i++) {
    res.push(i);
  }
  return res;
}
