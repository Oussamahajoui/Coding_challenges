// Description:
// Write function heron which calculates the area of a triangle with sides a, b, and c (x, y, z in COBOL).

// Output should have 2 digits precision.

// My Solution:
function heron(a, b, c) {
    const s = (a + b + c) / 2
    const heron = s * (s - a) * (s - b) * (s - c)
    const res = parseFloat(Math.sqrt(heron).toFixed(2))
    return res
}