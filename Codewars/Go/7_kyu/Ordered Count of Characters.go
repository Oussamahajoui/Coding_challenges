// Description:
// Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. For empty output return (an empty list).

// Consult the solution set-up for the exact data structure implementation depending on your language.

// Example:

// OrderedCount("abracadabra") == []Tuple{Tuple{'a', 5}, Tuple{'b', 2}, Tuple{'r', 2}, Tuple{'c', 1}, Tuple{'d', 1}}

// // Where
// type Tuple struct {
//     Char  rune
//     Count int
// }

// My Solution:
package orderedcount

// Use the preloaded Tuple struct as return type
// type Tuple struct {
// 	Char  rune
// 	Count int
// }

func OrderedCount(text string) []Tuple {
  counts := make(map[rune]int)
  var order []rune
  
  for _, char := range text {
    if _, exists := counts[char]; !exists {
      order = append(order, char)
    }
    counts[char]++
  }
  
  res := []Tuple{}
  for _, char := range order{
    res =  append(res, Tuple{Char : char , Count: counts[char] })
  }
  return res
}