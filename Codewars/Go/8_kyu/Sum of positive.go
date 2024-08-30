// Description:
// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

// My Solution:
package kata

func PositiveSum(numbers []int) int {
  res := 0
  for _,v := range numbers{
    if v > 0 {
      res += v
    }
  }
  return res
}


// Another way:
package kata

func PositiveSum(numbers []int) (sum int) {
  for _, num := range numbers {
    if num > 0 {
      sum = sum + num
    }
  }
  return
}