// Description:
// In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters (everything else), as follows.

// The order is: uppercase letters, lowercase letters, numbers and special characters.

// "*'&ABCDabcde12345" --> [ 4, 5, 5, 3 ]
// More examples in the test cases.

// Good luck!

// My Solution:
package kata

import "regexp"

func Solve(s string) []int {
	// Count uppercase letters
	upperRegex := regexp.MustCompile(`[A-Z]`)
	upper := len(upperRegex.FindAllString(s, -1))

	// Count lowercase letters
	lowerRegex := regexp.MustCompile(`[a-z]`)
	lower := len(lowerRegex.FindAllString(s, -1))

	// Count digits
	numRegex := regexp.MustCompile(`[0-9]`)
	nums := len(numRegex.FindAllString(s, -1))

	// Count special characters
	special := len(s) - upper - lower - nums

	// Return the result as a slice
	return []int{upper, lower, nums, special}
}

// Better way without regex:
func Solve(s string) []int {
	r := make([]int, 4)
	for _, c := range s {
	  switch {
		case c >= 'A' && c <= 'Z': r[0]++;
		case c >= 'a' && c <= 'z': r[1]++;
		case c >= '0' && c <= '9': r[2]++;
		default: r[3]++;
	  }
	}
	return r
  }