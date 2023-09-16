// Description:
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

// My Solution:
function isIsogram(str) {
    const mySet = new Set();

    for (let c of str) {
        c = c.toLowerCase()
        if (mySet.has(c)) {
            return false
        }
        else {
            mySet.add(c)
        }
    }
    return true
}

// One line:
function isIsogram(str) {
    return new Set(str.toUpperCase()).size == str.length;
}