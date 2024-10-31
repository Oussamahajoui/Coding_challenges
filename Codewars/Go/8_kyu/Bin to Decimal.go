// Description:
// Complete the function which converts a binary number (given as a string) to a decimal number.

// My Solution:
package kata

import "strconv"

func BinToDec(bin string) int {
  value , _ :=  strconv.ParseInt(bin, 2, 0)
  return int(value)
}
