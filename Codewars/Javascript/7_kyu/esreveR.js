// Description:
// Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)

// (the dedicated builtin(s) functionalities are deactivated)

// My Solution:
reverse = function (array) {
    let res = []
    for (let i = array.length - 1; i >= 0; i--) {
        res.push(array[i])
    }
    return res
}