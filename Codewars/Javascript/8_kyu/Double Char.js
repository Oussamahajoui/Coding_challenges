// DESCRIPTION:
// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "
// Good Luck!

// My Solution:
function doubleChar(str) {
    let res = ""
    for (let c of str) {
        res += c.repeat(2)
    }
    return res
}
