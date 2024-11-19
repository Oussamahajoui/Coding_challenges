// Description:
// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

// My Solution:
package kata

import "strings"

func Accum(s string) string {
  res := []string{}
  for i, char := range s{
    res = append(res, strings.ToUpper(string(char)) + strings.Repeat(strings.ToLower(string(char)), i))
  }
  return strings.Join(res[:], "-")
}