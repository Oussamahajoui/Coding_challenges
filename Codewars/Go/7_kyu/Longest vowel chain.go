// Description:
// The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.

// Good luck!

// My Solution:
package kata

import "math"

func Solve(s string) int {
  vowels := []rune{'a','e','i','o','u'}
  res := 0
  sofar := 0
  for _, c := range s {
    if contains(vowels, c){
      sofar += 1
      res = int(math.Max(float64(sofar), float64(res)))
    } else {
      sofar = 0
    }
  }
  return res
}

func contains(s []rune, c rune) bool {
    for _, v := range s {
        if v == c {
            return true
        }
    }
    return false
}