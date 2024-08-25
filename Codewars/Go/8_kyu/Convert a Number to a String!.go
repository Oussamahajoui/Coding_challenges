// Description:
// We need a function that can transform a number (integer) into a string.

// What ways of achieving this do you know?

// Examples (input --> output):
// 123  --> "123"
// 999  --> "999"
// -100 --> "-100"

// My Solution:
package kata

import "fmt" // package for printing to console
import "strconv" // package for conversion str/int Itoa = int to Str : Atoi = Str to int


func NumberToString(n int) string {
  v := strconv.Itoa(n)
  fmt.Println(v) // just to console log all test in every line to view
  return v
}
