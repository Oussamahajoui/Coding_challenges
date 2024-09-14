// Description:
// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]

// My Solution:
package kata

func Digitize(n int) []int {
  var res []int
  if n == 0{
    return []int{0}
  }
  for n > 0{
    res = append(res, n % 10)
    n = n / 10
  }
  return res
}

// Other way:
package kata

func Digitize(n int) (a[]int) {
    if n == 0 { a = append(a, 0) }
    for ; n>0; n /= 10 { a = append(a, n % 10) }
    return
}