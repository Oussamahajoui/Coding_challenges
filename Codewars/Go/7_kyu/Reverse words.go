// Description:
// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

// My Solution:
package kata

import "strings"

func reverseWord(s string) (result string) {
    for _,v := range s {
      result = string(v) + result
    }
    return result
}

func ReverseWords(str string) string {
  words := strings.Split(str, " ")
  res := ""
  for _, w := range words {
    res += " " + reverseWord(w)
  }
  return res[1:]
}