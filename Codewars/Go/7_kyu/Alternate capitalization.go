// Description:
// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

// My Solution:
package kata

import "strings"

func Capitalize(st string) []string {
	var sOdd []string
  var sEven []string
  for i, c  := range st {
    if i % 2 == 0 {
      sOdd = append(sOdd, strings.ToLower(string(c)))
      sEven = append(sEven, strings.ToUpper(string(c)))
    }else {
      sOdd = append(sOdd, strings.ToUpper(string(c)))
      sEven = append(sEven, strings.ToLower(string(c)))
    }      
  }
  return []string{strings.Join(sEven, "") , strings.Join(sOdd, "")}
}