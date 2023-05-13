// Description:
// Complete the keysAndValues function so that it takes in an object and returns the keys and values as separate arrays.

// Example:

// keysAndValues({a: 1, b: 2, c: 3}) // should return [['a', 'b', 'c'], [1, 2, 3]]
// Style Points (JS/CoffeeScript only): This kata only tests for data that uses object literal notation (simple objects). For extra style, can you get your method to check for objects that extend their prototype?

// My Solution:
function keysAndValues(data) {
    let keys = [], values = []
    for (const [key, value] of Object.entries(data)) {
        keys.push(key)
        values.push(value)
    }
    return [keys, values]
}

// Better way:
function keysAndValues(data) {
    return [Object.keys(data), Object.values(data)];
}