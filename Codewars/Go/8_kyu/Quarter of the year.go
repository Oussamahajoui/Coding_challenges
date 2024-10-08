// Description:
// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

// Constraint:

// 1 <= month <= 12

// My Solution:
package kata

func QuarterOf(month int) int {
  switch{
    case month < 4: return 1
    case month < 7: return 2
    case month < 10: return 3
    default: return 4
  }
}

//Other way:
package kata

func QuarterOf(month int) int {
  return (month + 2) / 3
}