// Description:
// Kevin is noticing his space run out! Write a function that removes the spaces from the values and returns an array showing the space decreasing.
// For example, running this function on the array ['i', 'have','no','space'] would produce ['i','ihave','ihaveno','ihavenospace']

// My Solution:
function spacey(array) {
    return array.map((e, i) => {
        if (i > 0) {
            return array.slice(0, i).join('') + e
        } else {
            return e
        }
    }
    )
}

// Better way:
function spacey(array) {
    let string = ''
    return array.map((e) => string += e)
}