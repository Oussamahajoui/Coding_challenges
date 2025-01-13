// Description:
// Given a string and an array of integers representing indices, capitalize all letters at the given indices.

// For example:

// capitalize("abcdef",[1,2,5]) = "aBCdeF"
// capitalize("abcdef",[1,2,5,100]) = "aBCdeF". There is no index 100.
// The input will be a lowercase string with no spaces and an array of digits.

// Good luck!

// My Solution:
package kata

import "strings"

func Capitalize(st string, arr []int) string {
  letters := strings.Split(st, "")
  for i, val := range letters {
        if contains(arr, i) {
            letters[i] = strings.ToUpper(val)
        }}
    
    return strings.Join(letters, "")
}

func contains(arr []int, value int) bool {
    for _, v := range arr {
        if v == value {
            return true
        }
    }
    return false
}