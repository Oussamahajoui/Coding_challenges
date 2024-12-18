// Description:
// You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

// Find max(abs(length(x) − length(y)))

// If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

// Example:
// a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
// a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
// mxdiflg(a1, a2) --> 13
// Bash note:
// input : 2 strings with substrings separated by ,
// output: number as a string

// My Solution:
package kata

import "math"

func MxDifLg(a1 []string, a2 []string) int {
    if len(a1) == 0 || len(a2) == 0 {
      return -1
    }
  l1max := len(a1[0])
  l1min := len(a1[0])
  for _, v := range a1{
    if len(v) > l1max {
      l1max = len(v)
    } else if len(v) < l1min {
      l1min = len(v)
    }
  }
  l2max := len(a2[0])
  l2min := len(a2[0])
  for _, v := range a2{
    if len(v) > l2max {
      l2max = len(v)
    } else if len(v) < l2min {
      l2min = len(v)
    }
  }
  v1 := math.Abs(float64(l1max) - float64(l2min))
  v2 := math.Abs(float64(l2max) - float64(l1min))
  return int(math.Max(v1,v2))
}