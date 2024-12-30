// Description:
// Remove the duplicates from a list of integers, keeping the last ( rightmost ) occurrence of each element.

// Example:
// For input: [3, 4, 4, 3, 6, 3]

// remove the 3 at index 0
// remove the 4 at index 1
// remove the 3 at index 3
// Expected output: [4, 6, 3]

// More examples can be found in the test cases.

// Good luck!

// My Solution:
package kata 

func Solve(arr []int) []int {
	mySet := make(map[int]struct{})
  var res []int
  
  for i:= len(arr)- 1; i >= 0; i-- {
    if _, exists := mySet[arr[i]]; !exists{
      mySet[arr[i]] = struct{}{}
      res = append(res, arr[i])
    }
  }
  
  for i,j := 0 , len(res) - 1; i <j ; i, j = i + 1, j - 1 {
    res[i], res[j] = res[j] , res[i]
  }
  
  return res
}

//Other way:
func Solve(arr []int) (res []int) {
    visited := map[int]bool{}
    for i := len(arr) - 1; i >= 0; i-- {
        n := arr[i]
        if visited[n] { continue }
      
        visited[n] = true
        res = append([]int{n}, res...)
    }
  
    return
}