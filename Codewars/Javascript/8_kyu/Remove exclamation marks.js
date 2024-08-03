// DESCRIPTION:
// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

// My Solution:
function removeExclamationMarks(s) {
    let arr = s.split('')
    arr = arr.filter((w) => w != '!')
    return arr.join('')
}

// Other solution:
function removeExclamationMarks(s) {
    return s.split('!').join('');
}

// Another one:
function removeExclamationMarks(s) {
    return s.replaceAll('!', '');
}