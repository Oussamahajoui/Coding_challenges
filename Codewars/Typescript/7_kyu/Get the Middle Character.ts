// Description:
// You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.

// If the string's length is odd, return the middle character.
// If the string's length is even, return the middle 2 characters.
// Examples:
// "test" --> "es"
// "testing" --> "t"
// "middle" --> "dd"
// "A" --> "A"

// My Solution:
export function getMiddle(s: string) {
  const N: number = s.length;
  if (N % 2 === 1) {
    // odd
    let idx: number = Math.floor(N / 2);
    return s[idx];
  } else {
    // even case
    let idx = N / 2;
    return s.slice(idx - 1, idx + 1);
  }
}
