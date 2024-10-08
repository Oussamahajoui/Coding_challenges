// Description:
// Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.

// Examples
// "312" should return "333122"
// "102269" should return "12222666666999999999"

// My Solution:
function explode(s) {
    let res = ""
    for (let c of s) {
        for (let count = 1; count <= Number(c); count++) {
            res += c
        }
    }
    return res
}

//More JS way:
function explode(s) {
    return s.split("").map((e) => e.repeat(+e)).join("");
}