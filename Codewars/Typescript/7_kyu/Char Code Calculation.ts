// Description:
// Given a string, turn each character into its ASCII character code and join them together to create a number - let's call this number total1:

// 'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
// Then replace any incidence of the number 7 with the number 1, and call this number 'total2':

// total1 = 656667
//               ^
// total2 = 656661
//               ^
// Then return the difference between the sum of the digits in total1 and total2:

//   (6 + 5 + 6 + 6 + 6 + 7)
// - (6 + 5 + 6 + 6 + 6 + 1)
// -------------------------
//                        6

// My Solution:
export const calc = (x: string): number => {
  let total1: string = "";
  for (let i = 0; i < x.length; i++) {
    total1 += x.charCodeAt(i);
  }
  let total2: string = total1.replaceAll("7", "1");
  let res: number =
    total1
      .split("")
      .map((e) => parseFloat(e))
      .reduce((a, b) => a + b, 0) -
    total2
      .split("")
      .map((e) => parseFloat(e))
      .reduce((a, b) => a + b, 0);
  return res;
};
