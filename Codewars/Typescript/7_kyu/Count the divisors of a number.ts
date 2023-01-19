// Description:
// Count the number of divisors of a positive integer n.

// Random tests go up to n = 500000, but fixed tests go higher.

// Examples (input --> output)
// 4 --> 3 // we have 3 divisors - 1, 2 and 4
// 5 --> 2 // we have 2 divisors - 1 and 5
// 12 --> 6 // we have 6 divisors - 1, 2, 3, 4, 6 and 12
// 30 --> 8 // we have 8 divisors - 1, 2, 3, 5, 6, 10, 15 and 30
// Note you should only return a number, the count of divisors. The numbers between parentheses are shown only for you to see which numbers are counted in each case.

// My Solution:
export function divisors(n: number) {
  let res: number = 0;
  const sqrtN: number = Math.sqrt(n);
  if (n % sqrtN === 0) {
    res++;
  }
  for (let i = 1; i < sqrtN; i++) {
    if (n % i === 0) {
      res += 2;
    }
  }
  return res;
}

// Better way:
function divisors2(n: number) {
  let steps = 0;

  for (let i = 0; i <= n; i++) {
    if (n % i === 0) steps++;
  }

  return steps;
}
