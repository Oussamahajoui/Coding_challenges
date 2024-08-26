// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// My Solution:
package kata

func Solution(word string) (result string) {
  for _, v := range word{
    result = string(v) + result
  }
  return result
}