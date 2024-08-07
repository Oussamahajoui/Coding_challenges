// Task
// Coding in function roundIt. function accept 1 parameter n. It's a number with a decimal point. Please use different methods based on the location of the decimal point, turn the number into an integer.

// If the decimal point is on the left side of the number (that is, the count of digits on the left of the decimal point is less than that on the right), Using ceil() method.

// roundIt(3.45) should return 4
// If the decimal point is on the right side of the number (that is, the count of digits on the left of the decimal point is more than that on the right), Using floor() method.

// roundIt(34.5) should return 34
// If the decimal point is on the middle of the number (that is, the count of digits on the left of the decimal point is equals that on the right), Using round() method.

// roundIt(34.56) should return 35

// My Solution:
function roundIt(n) {
    let decimalsVsIntegers = String(n).split('.')
    if (decimalsVsIntegers[0].length > decimalsVsIntegers[1].length) {
        return Math.floor(n)
    } else if (decimalsVsIntegers[1].length > decimalsVsIntegers[0].length) {
        return Math.ceil(n)
    } else {
        return Math.round(n)
    }
}

// More concise way:
function roundIt(n) {
    var [a, b] = n.toString().split('.');
    return a.length > b.length ? Math.floor(n) : a.length === b.length ? Math.round(n) : Math.ceil(n);
}