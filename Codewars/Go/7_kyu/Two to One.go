// Description:
// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string (alphabetical ascending), the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

//My Solution:
package kata

import (
	"sort"
	"strings"
)

func TwoToOne(s1 string, s2 string) string {
  allLetters := []rune(s1 + s2)

	sort.Slice(allLetters, func(i, j int) bool {
		return allLetters[i] < allLetters[j]
	})

	var res strings.Builder
	seen := make(map[rune]bool)

	for _, c := range allLetters {
		if !seen[c] {
			seen[c] = true
			res.WriteRune(c)
		}
	}

	return res.String()
}
