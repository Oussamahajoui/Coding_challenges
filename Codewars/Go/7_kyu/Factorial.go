// Description:
// Your task is to write function factorial.

// https://en.wikipedia.org/wiki/Factorial

// My Solution:
package kata

func Factorial(n int) int {
	if n == 0 || n == 1 {
    return 1
  }
  res := 1
  for n > 0 {
    res *= n
    n -= 1
  }
  return res
}