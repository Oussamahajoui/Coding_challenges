// Description:
// Is the string uppercase?
// Task
// Create a method to see whether the string is ALL CAPS.

// Examples (input -> output)
// "c" -> False
// "C" -> True
// "hello I AM DONALD" -> False
// "HELLO I AM DONALD" -> True
// "ACSKLDFJSgSKLDFJSKLDFJ" -> False
// "ACSKLDFJSGSKLDFJSKLDFJ" -> True
// In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.

// My Solution:
package kata

import "unicode"

type MyString string


func (s MyString) IsUpperCase() bool {
  for _ , c := range s{
    if unicode.IsLower(c) {
      return false
    }
  }
  return true
}

//Other way:
import (
	"strings"
  )
  
  type MyString string
  
  func (s MyString) IsUpperCase() bool {
	// Your code here!
	return s == MyString(strings.ToUpper(string(s)))
  }