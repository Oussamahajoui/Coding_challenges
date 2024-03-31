// DESCRIPTION:
// Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

// The order of the sequence has to stay the same.

// Examples:

// Input -> Output
// [1, 1, 2] -> [1, 2]
// [1, 2, 1, 1, 3, 2] -> [1, 2, 3]

// My Solution:
function distinct(a) {
    return Array.from(new Set(a));
}

// Other solution:
function distinct(a) {
    return [...new Set(a)];
}