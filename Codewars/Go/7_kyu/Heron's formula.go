// Description:
// Write function heron which calculates the area of a triangle with sides a, b, and c (x, y, z in COBOL).

// Output should have 2 digits precision.

// My Solution:
package kata

import "math"


func Heron(a, b, c float64) (area float64) {
  s:= (a + b + c)/2
  heron := s * (s-a) * (s-b) * (s - c)
  res := math.Sqrt(heron)
  return res
}