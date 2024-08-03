// DESCRIPTION:
// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

// My Solution:
const reverseSeq = n => {
    let res = []
    while (n >= 1) {
        res.push(n)
        n -= 1
    }
    return res;
};