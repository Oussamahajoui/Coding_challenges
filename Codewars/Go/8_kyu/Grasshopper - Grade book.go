// Description:
// Grade book
// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

// Fundamentals

// My Solution:
package kata

func GetGrade(a,b,c int) rune {
  grade:= (a+b+c)/3
  switch{
  case grade < 60:
    return 'F'
  case grade < 70:
  return 'D'
  case grade < 80:
  return 'C'
  case grade < 90:
  return 'B'
  case grade <= 100:
  return 'A'
    }
  return '0'
}

//Better syntax:
package kata

func GetGrade(a,b,c int) rune {
    switch mean := (a+b+c)/3; {
    case mean < 60: 
    return 'F'
    case mean < 70: 
    return 'D'
    case mean < 80: 
    return 'C'
    case mean < 90: 
    return 'B'
    default: 
    return 'A'
    }
    
}