// Description:
// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

// make as few changes as possible.
// if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
// For example:

// solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
// solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
// solve("coDE") = "code". Upper == lowercase. Change all to lowercase.
// More examples in test cases. Good luck!

// My Solution:
package kata

import (
  "unicode"
  "strings"
)

func solve(str string) string {
  var up int
  var low int
  for _, v := range str{
    if unicode.IsUpper(v) {
      up++
    } else {
      low++
    }
  }
  res := []string{}
  if up > low {
    for _, v := range str{
      res = append(res, string(unicode.ToUpper(v)))
    }
  } else {
    for _, v := range str{
      res = append(res, string(unicode.ToLower(v)))
    }
  }
  return strings.Join(res, "")
}

// simpler way:
func solve(s string) string {
	l, u := 0, 0
	for _, c := range s { if unicode.IsUpper(c) { u++ } else { l++ } }
  
	if l >= u { return strings.ToLower(s) }
  
	return strings.ToUpper(s)
  }