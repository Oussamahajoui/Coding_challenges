// Description:
// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

// My Solution:
function reverseWord(s: string): string {
  return s.split("").reverse().join("");
}

export function reverseWords(str: string): string {
  let words: string[] = str.split(" ");
  let res: string = "";
  for (let w of words) {
    res += " " + reverseWord(w);
  }
  return res.slice(1);
}
