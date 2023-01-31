// Description:
// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

// My Solution:
export function accum(s: string): string {
  let res: string[] = [];
  for (let i = 0; i < s.length; i++) {
    res.push(s[i].toUpperCase() + s[i].toLowerCase().repeat(i));
  }
  return res.join("-");
}
