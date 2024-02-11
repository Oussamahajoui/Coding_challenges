// Description:
// Your task is simply to count the total number of lowercase letters in a string.

// Examples
// "abc" ===> 3

// "abcABC123" ===> 3

// "abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 3

// "" ===> 0;

// "ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 0

// "abcdefghijklmnopqrstuvwxyz" ===> 26

// My Solution:
function lowercaseCount(str) {
    let res = 0
    for (const c of str) {
        if (c >= 'a' && c <= 'z') {
            res += 1
        }
    }
    return res
}