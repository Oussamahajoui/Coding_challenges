// Description:
// Task
// Given a string str, reverse it and omit all non-alphabetic characters.

// Example
// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".

// Input/Output
// [input] string str
// A string consists of lowercase latin letters, digits and symbols.

// [output] a string

// My Solution:
package kata

import "unicode"

func ReverseLetters(s string) string {
  runes := []rune(s)
  var res []rune 
  for i := len(runes) - 1; i >= 0; i-- { 
    if unicode.IsLetter(runes[i]) {
      res = append(res, runes[i])
    }
  }
  return string(res)
}
