// DESCRIPTION:
// Implement a function which convert the given boolean value into its string representation.

// Note: Only valid inputs will be given.

// My Solution
function booleanToString(b) {
    if (b === true) {
        return 'true'
    } else {
        return 'false'
    }
}

// My other solution
function booleanToString(b) {
    return b.toString();
}