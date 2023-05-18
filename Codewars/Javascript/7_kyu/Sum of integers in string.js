// Description:
// Your task in this kata is to implement a function that calculates the sum of the integers inside a string. For example, in the string "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", the sum of the integers is 3635.

// Note: only positive integers will be tested.

// My Solution:
function sumOfIntegersInString(s) {
    return s.split(/[^0-9]/g).map((e) => parseFloat(e)).filter(Boolean).reduce((a, b) => a + b, 0)
}

// The Boolean filter trick is very useful in this case