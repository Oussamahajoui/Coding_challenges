// Description:
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// My Solution:
package kata

func GetCount(str string) (count int) {
  vowels := map[rune]bool{
		'a': true,
		'e': true,
		'i': true,
		'o': true,
		'u': true,
	}
  for _, c := range str {
    if vowels[c]{
      count++
    }
  }
  return count
}