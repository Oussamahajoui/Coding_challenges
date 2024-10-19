// Description:
// Write a function that checks if a given string (case insensitive) is a palindrome.

// A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar.

// My Solution:
package kata

import "strings"

func ReverseString(s string) string{
    runes := []rune(s)
    for i, j := 0, len(runes) - 1; i <j; i, j = i+1, j-1 {
      runes[i] , runes[j] = runes[j] , runes[i]
    }
    return string(runes)
  }

func IsPalindrome(str string) bool {
  return ReverseString(strings.ToLower(str)) == strings.ToLower(str)
}