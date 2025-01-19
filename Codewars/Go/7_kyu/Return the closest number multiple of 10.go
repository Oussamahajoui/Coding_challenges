// Description:
// Given a number return the closest number to it that is divisible by 10.

// Example input:

// 22
// 25
// 37
// Expected output:

// 20
// 30
// 40

// My Solution:
package kata

import "math"


func ClosestMultipleOf10(n uint32) uint32 {
  if n % 10 >= 5 {
    return uint32(math.Ceil(float64(n)/10) * 10)
  }
  return n / 10 * 10
}