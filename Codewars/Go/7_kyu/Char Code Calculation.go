// Description:
// Given a string, turn each character into its ASCII character code and join them together to create a number - let's call this number total1:

// 'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
// Then replace any incidence of the number 7 with the number 1, and call this number 'total2':

// total1 = 656667
//               ^
// total2 = 656661
//               ^
// Then return the difference between the sum of the digits in total1 and total2:

//   (6 + 5 + 6 + 6 + 6 + 7)
// - (6 + 5 + 6 + 6 + 6 + 1)
// -------------------------
//                        6

// My Solution:
package kata

import (
  "strings"
  "strconv"  
)

func sumDigits(s string) float64{
  var sum float64
  
  for i := 0; i < len(s) ; i++{
    num, err := strconv.ParseFloat(string(s[i]), 64)
    if err == nil {
      sum += num
    }
  }
  return sum
}

func Calc(s string) int {
  total1 := ""
  for i := 0; i< len(s); i++{
    total1 += strconv.Itoa(int(s[i]))
  }
  
  total2 := strings.ReplaceAll(total1, "7" , "1")
  
  sum1 := sumDigits(total1)
  sum2 := sumDigits(total2)
  
  res := sum1 - sum2
  
  
  return int(res)
}
