// Description:
// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"

// My Solution:
// write the function isAnagram
var isAnagram = function (test, original) {
    let myCounter = {}
    for (let c of original) {
        c = c.toLowerCase()
        if (c in myCounter) {
            myCounter[c] += 1
        } else {
            myCounter[c] = 1
        }
    }
    let testCounter = {}
    for (let c of test) {
        c = c.toLowerCase()
        if (c in testCounter) {
            testCounter[c] += 1
        } else {
            testCounter[c] = 1
        }
    }
    const keys1 = Object.keys(myCounter)
    const keys2 = Object.keys(testCounter)

    if (keys1.length != keys2.length) {
        return false
    }

    for (const key of keys1) {
        if (myCounter[key] !== testCounter[key]) {
            return false
        }
    }
    return true
};

// Simpler using sort:
const isAnagram = function (test, original) {
    const t = test.toLowerCase().split('').sort().join('');
    const o = original.toLowerCase().split('').sort().join('');
    return (t == o) ? true : false;
};