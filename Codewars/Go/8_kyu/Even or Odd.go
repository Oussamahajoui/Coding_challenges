// Description:
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

// MathematicsFundamentals

// My Solution:
package kata

func EvenOrOdd(number int) string {
  if number % 2 == 0 {
    return "Even"
  }
  return "Odd"
}