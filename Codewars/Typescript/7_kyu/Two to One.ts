// Description:
// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string (alphabetical ascending), the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

// My Solution
export const longest = (s1: string, s2: string): string => {
  let allLetters: string[] = [...s1, ...s2].sort((a, b) => a.localeCompare(b));
  let res: string[] = [];
  for (const c of allLetters) {
    if (res.indexOf(c) === -1) {
      res.push(c);
    }
  }
  return res.join("");
};
