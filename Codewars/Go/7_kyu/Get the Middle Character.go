// Description:
// You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.

// If the string's length is odd, return the middle character.
// If the string's length is even, return the middle 2 characters.
// Examples:
// "test" --> "es"
// "testing" --> "t"
// "middle" --> "dd"
// "A" --> "A"

// My Solution:
package kata

import "math"

func GetMiddle(s string) string {
  length := len(s)
  if int(length) % 2 != 0 {
    d := int(math.Floor(float64(length)/2))
    return string(s[d])
  } else{
    e := int(math.Floor(float64(length)/2)) - 1
    f := int(math.Floor(float64(length)/2))  + 1
    return s[e:f]
  }
  
}

// Much simpler way:
package kata

func GetMiddle(s string) string {
    n := len(s)
    if n==0 {return s}
    return s[(n - 1) / 2 : n / 2 + 1]
}