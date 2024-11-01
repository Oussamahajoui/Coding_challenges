// Description:
// Write a function that returns the total surface area and volume of a box as an array: [area, volume]

// My Solution:
package kata

func GetSize(w,h,d int) [2]int {
  area := 2*w*h + 2*h*d + 2*w*d
  volume := w * h * d
  return [2]int{area, volume}
}