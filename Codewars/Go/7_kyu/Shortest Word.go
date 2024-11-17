// Description:
// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

// My Solution:
package kata

import "strings"

func FindShort(s string) (res int) {
  words := strings.Split(s, " ")
  res = len(s)
  for _, word := range words {
    word_len := len(word)
    if word_len < res {
      res = word_len
    }
  }
  return res
}