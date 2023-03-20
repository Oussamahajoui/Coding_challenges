// Description:
// When provided with a String, capitalize all vowels

// For example:

// Input : "Hello World!"

// Output : "HEllO WOrld!"

// Note: Y is not a vowel in this kata.

// My Solution:
function swap(string) {
  const vowels = ["a", "e", "i", "o", "u"];
  let res = "";
  for (const c of string) {
    if (vowels.includes(c.toLowerCase())) {
      res += c.toUpperCase();
    } else {
      res += c;
    }
  }
  return res;
}
