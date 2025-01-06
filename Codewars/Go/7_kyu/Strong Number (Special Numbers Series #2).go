// Description:
// Strong number is a number with the sum of the factorial of its digits is equal to the number itself.

// For example, 145 is strong, because 1! + 4! + 5! = 1 + 24 + 120 = 145.

// Task
// Given a positive number, find if it is strong or not, and return either "STRONG!!!!" or "Not Strong !!".

// Examples
// 1 is a strong number, because 1! = 1, so return "STRONG!!!!".
// 123 is not a strong number, because 1! + 2! + 3! = 9 is not equal to 123, so return "Not Strong !!".
// 145 is a strong number, because 1! + 4! + 5! = 1 + 24 + 120 = 145, so return "STRONG!!!!".
// 150 is not a strong number, because 1! + 5! + 0! = 122 is not equal to 150, so return "Not Strong !!".

// My Solution:
package kata

func Strong(n int) string {
  cache := make(map[int]int)
	// Factorial function with caching
	var factorize func(x int) int
	factorize = func(x int) int {
		// Check if the factorial of x is already in the cache
		if val, exists := cache[x]; exists {
			return val
		}

		// Return -1 for negative numbers (edge case)
		if x < 0 {
			return -1
		}

		// Return 1 for factorial of 0 or 1 (base cases)
		if x == 0 || x == 1 {
			return 1
		}

		// Recursive call to calculate factorial
		result := factorize(x-1) * x

		// Cache the result for future use
		cache[x] = result

		return result
	}

	// Store the original number for comparison later
	originalNum := n

	// Variable to hold the sum of factorials of digits
	value := 0

	// Loop to process each digit of the number
	for n > 0 {
		// Get the last digit of the number
		digit := n % 10

		// Add the factorial of the digit to the total value
		value += factorize(digit)

		// Remove the last digit from the number
		n = n / 10
	}

	if value == originalNum {
		return "STRONG!!!!"
	}
	return "Not Strong !!"
}