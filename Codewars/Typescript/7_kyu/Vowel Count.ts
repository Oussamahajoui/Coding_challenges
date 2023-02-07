// Description:
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// My Solution:
export class Kata {
  static getCount(str: string): number {
    const vowels: string[] = ["a", "e", "i", "o", "u"];
    let res: number = 0;
    for (const c of str) {
      if (vowels.includes(c)) {
        res += 1;
      }
    }
    return res;
  }
}
