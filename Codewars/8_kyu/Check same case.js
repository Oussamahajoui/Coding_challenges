// DESCRIPTION:
// Write a function that will check if two given characters are the same case.

// If either of the characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters, but not the same case, return 0
// Examples
// 'a' and 'g' returns 1

// 'A' and 'C' returns 1

// 'b' and 'G' returns 0

// 'B' and 'g' returns 0

// '0' and '?' returns -1

// My Solution:
function isUpper(x) {
    return x.toUpperCase() === x
}

function isLower(x) {
    return x.toLowerCase() === x
}

function sameCase(a, b) {
    if (typeof a !== 'string' || typeof b !== 'string') {
        return -1
    }
    else if (a.length !== 1 || b.length !== 1 || !((a >= 'A' && a <= 'Z') || (a >= 'a' && a <= 'z')) || !((b >= 'A' && b <= 'Z') || (b >= 'a' && b <= 'z'))) {
        return -1;
    }
    else if ((isUpper(a) && isUpper(b)) || (isLower(a) && (isLower(b)))) {
        return 1
    } else {
        return 0
    }
}