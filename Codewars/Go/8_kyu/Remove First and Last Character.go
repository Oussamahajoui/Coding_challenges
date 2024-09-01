// Description:
// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry about strings with less than two characters.

// My Solution:
package kata

func RemoveChar(word string) string {
  return word[1:len(word)-1]
}