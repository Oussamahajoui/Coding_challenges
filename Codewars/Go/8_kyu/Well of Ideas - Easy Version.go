// Description:
// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

// My Solution:
package kata

func Well(x []string) string {
  tmp := []string{}
  for _, val := range x {
    if val == "good"{
      tmp = append(tmp, val)
    }
  }
  if len(tmp) > 2{
    return "I smell a series!"
  } else if len(tmp) > 0 {
    return "Publish!"
  } else {
    return "Fail!"
  }
}