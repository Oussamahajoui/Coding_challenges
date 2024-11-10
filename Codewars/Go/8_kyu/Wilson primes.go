// Description:
// Wilson primes satisfy the following condition. Let 
// P
// P represent a prime number.

// Then,

// (
// P
// −
// 1
// )
// !
// +
// 1
// P
// ∗
// P
// P∗P
// (P−1)!+1
// ​
 
// should give a whole number, where 
// P
// !
// P! is the factorial of 
// P
// P.

// Your task is to create a function that returns true if the given number is a Wilson prime and false otherwise.

// My Solution:
package kata


func AmIWilson(n int) bool {
  return n == 5 || n == 13 || n == 563
}
