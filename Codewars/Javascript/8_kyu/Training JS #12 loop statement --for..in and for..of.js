// Task
// The function giveMeFive accepts 1 parameter, obj, which is an object.

// Create an array (which you will eventually return). Then, traverse obj, checking each key and value. If the length of the key is equal to 5, then push the key to your array. Separately, if the length of the value is equal to 5, then push the value to your array.

// At the end, return your array.

// You should use for..in in your code, otherwise your solution may not pass this kata.

// My Solution:
function giveMeFive(obj) {
    let res = []
    for (const key in obj) {
        if (key.length === 5 && obj[key].length === 5) {
            res.push(key)
            res.push(obj[key])
        }
        else if (key.length === 5) {
            res.push(key)
        }
        else if (obj[key].length === 5) {
            res.push(obj[key])
        }
    }
    return res
}

// Better way to write it:
function giveMeFive(obj) {
    let res = [];
    for (var key in obj) {
        if (key.length === 5) res.push(key);
        if (obj[key].length === 5) res.push(obj[key]);
    }
    return res;
}