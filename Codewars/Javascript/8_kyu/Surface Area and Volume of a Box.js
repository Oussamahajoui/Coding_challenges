// DESCRIPTION:
// Write a function that returns the total surface area and volume of a box as an array: [area, volume]

// My Solution:
function getSize(w, h, d) {
    const area = 2 * w * h + 2 * h * d + 2 * w * d
    const volume = w * h * d
    return [area, volume]
}
