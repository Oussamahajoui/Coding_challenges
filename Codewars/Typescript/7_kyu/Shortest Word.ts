// Description:
// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

// My Solution:
export function findShort(s: string): number {
  let res: number = Number.POSITIVE_INFINITY;
  for (const c of s.split(" ")) {
    res = Math.min(c.length, res);
  }
  return res;
}
