// Description:
// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.

// My Solution:
export function twoSort(s: string[]): string {
  s.sort();
  let first = s[0];
  let res: string[] = [];
  for (let c of first) {
    res.push(c);
    res.push("***");
  }
  return res.slice(0, res.length - 1).join("");
}
