// Description:
// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

// My Solution:
export function well(x: string[]): string {
  let goodones: string[] = x.filter((e) => e === "good");
  if (goodones.length > 2) {
    return "I smell a series!";
  } else if (goodones.length > 0) {
    return "Publish!";
  } else {
    return "Fail!";
  }
}
