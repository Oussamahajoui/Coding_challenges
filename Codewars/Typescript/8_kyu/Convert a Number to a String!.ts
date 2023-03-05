// Description:
// We need a function that can transform a number (integer) into a string.

// What ways of achieving this do you know?

// Examples (input --> output):
// 123  --> "123"
// 999  --> "999"
// -100 --> "-100"

// My Solution:
export function numberToString(num: number): string {
  return String(num);
}

//Other way:
function numberToString2(num: Number): string {
  return num.toString();
}
