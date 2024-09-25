// Description:
// Write a function to split a string and convert it into an array of words.

// Examples (Input ==> Output):
// "Robin Singh" ==> ["Robin", "Singh"]

// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

// My Solution:
package kata

import "strings"

func StringToArray(str string) (split[]string) {
  split = strings.Split(str, " ")
  return split
}
