// Description:
// Given a number return the closest number to it that is divisible by 10.

// Example input:

// 22
// 25
// 37
// Expected output:

// 20
// 30
// 40

// My Solution:
export const closestMultiple10 = (num: number): number => {
  if (num % 10 >= 5) {
    return Math.ceil(num / 10) * 10;
  }
  return Math.floor(num / 10) * 10;
};
