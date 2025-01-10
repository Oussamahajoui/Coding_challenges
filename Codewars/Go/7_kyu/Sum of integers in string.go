// Your task in this kata is to implement a function that calculates the sum of the integers inside a string. For example, in the string "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", the sum of the integers is 3635.

// Note: only positive integers will be tested.

// My Solution:
package kata

import (
  "regexp"
  "strconv"
)

func SumOfIntegersInString(s string) int {
  re := regexp.MustCompile("[^0-9]+")
  parts := re.Split(s, -1)
  
  res := 0
  
  for _, part := range parts{
    if part != "" {
      num, err := strconv.Atoi(part)
      if err == nil {
        res += num
      }
    }
  }
  
  return res
}