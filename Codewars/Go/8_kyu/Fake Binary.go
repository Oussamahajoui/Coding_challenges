// Description:
// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

// My Solution:
package kata


func FakeBin(x string) string {
    res := ""
    for _,n := range x {
      if n >= '5' {
        res += "1"
      }else{
        res += "0"
      }
    }  
  return res
}
