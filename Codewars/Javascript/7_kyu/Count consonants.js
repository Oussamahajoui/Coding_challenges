// Description:
// Complete the function that takes a string of English-language text and returns the number of consonants in the string.

// Consonants are all letters used to write English excluding the vowels a, e, i, o, u.

// My Solution:
function consonantCount(str) {
  const vowelsAndSpecial = [
    "a",
    "e",
    "i",
    "o",
    "u",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "^",
    "&",
    "$",
    "#",
    "_",
    " ",
  ];
  let res = 0;
  for (const c of str) {
    if (!vowelsAndSpecial.includes(c.toLowerCase())) {
      res++;
    }
  }
  return res;
}
