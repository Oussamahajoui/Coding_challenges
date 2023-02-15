// Description:
// Your goal is to return multiplication table for number that is always an integer from 1 to 10.

// For example, a multiplication table (string) for number == 5 looks like below:

// 1 * 5 = 5
// 2 * 5 = 10
// 3 * 5 = 15
// 4 * 5 = 20
// 5 * 5 = 25
// 6 * 5 = 30
// 7 * 5 = 35
// 8 * 5 = 40
// 9 * 5 = 45
// 10 * 5 = 50
// P. S. You can use \n in string to jump to the next line.

// Note: newlines should be added between rows, but there should be no trailing newline at the end. If you're unsure about the format, look at the sample tests.

// My Solution:
export function multiTable(number: number): string {
  let i = 1;
  return `${i} * ${number} = ${i * number}\n${i + 1} * ${number} = ${
    (i + 1) * number
  }\n${i + 2} * ${number} = ${(i + 2) * number}\n${i + 3} * ${number} = ${
    (i + 3) * number
  }\n${i + 4} * ${number} = ${(i + 4) * number}\n${i + 5} * ${number} = ${
    (i + 5) * number
  }\n${i + 6} * ${number} = ${(i + 6) * number}\n${i + 7} * ${number} = ${
    (i + 7) * number
  }\n${i + 8} * ${number} = ${(i + 8) * number}\n${i + 9} * ${number} = ${
    (i + 9) * number
  }`;
}

//Better way:
function multiTable2(number: number): string {
  return Array.from(
    { length: 10 },
    (_, i) => `${i + 1} * ${number} = ${number * (i + 1)}`
  ).join("\n");
}
