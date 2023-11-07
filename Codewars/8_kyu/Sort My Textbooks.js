// Description:
// HELP! Jason can't find his textbook! It is two days before the test date, and Jason's textbooks are all out of order! Help him sort a list (ArrayList in java) full of textbooks by subject, so he can study before the test.

// The sorting should NOT be case sensitive

// My Solution:
let sorter = (textbooks) => textbooks.sort((a, b) => {
    const aa = a.toLowerCase()
    const bb = b.toLowerCase()

    if (aa > bb) return 1
    if (aa < bb) return -1
    return 0
});