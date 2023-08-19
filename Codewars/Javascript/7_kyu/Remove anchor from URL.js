// Description:
// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

// My Solution:
function removeUrlAnchor(url) {
    const idx = url.indexOf('#')
    return idx === -1 ? url : url.slice(0, idx)
}

// Other way:
function removeUrlAnchor(url) {
    return url.split('#')[0];
}