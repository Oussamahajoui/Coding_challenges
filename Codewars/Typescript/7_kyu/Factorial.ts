// Description:
// Your task is to write function factorial.

// https://en.wikipedia.org/wiki/Factorial

// My Solution:
export function factorial(n: number) {
  if (n === 0 || n === 1) {
    return 1;
  }
  let res: number = 1;
  while (n > 0) {
    res *= n;
    n -= 1;
  }
  return res;
}
