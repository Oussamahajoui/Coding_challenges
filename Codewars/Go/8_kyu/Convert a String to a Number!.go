// Description:
// Note: This kata is inspired by Convert a Number to a String!. Try that one too.

// Description
// We need a function that can transform a string into a number. What ways of achieving this do you know?

// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

// Examples
// "1234" --> 1234
// "605"  --> 605
// "1405" --> 1405
// "-7" --> -7

// My Solution:
package kata

import "strconv"


func StringToNumber(str string) int {
    i,err := strconv.Atoi(str)
    if err != nil {
      return 0
    }
  return i
}


// Other way as we do not expect error in inputs here:
package kata

import "strconv"

func StringToNumber(str string) int {
  n, _ := strconv.Atoi(str)
  return n
}