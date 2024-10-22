// Description:
// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.

// My Solution:
package kata

import (
  "sort"
  "strings"
)

func TwoSort(arr []string) string {
  sort.Strings(arr)
  first := arr[0]
  var parts []string
  for _, c := range first{
    parts = append(parts, string(c))
    parts = append(parts, "***")
  }
  return strings.Join(parts[:len(parts) -1], "")
}