// Description:
// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

// My Solution:
package kata

import "strconv"

func SumMix(arr []any) (res int) {
  for _,num := range arr{
    switch v := num.(type){
      case int:
      res += v
      case string:
      if intVal, err := strconv.Atoi(v); err == nil{
        res += intVal
      }
    }
  }
  return res
}
