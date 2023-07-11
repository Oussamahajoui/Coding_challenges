// Description:
// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

// Example:

// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'

// My Solution:
function switcheroo(x) {
    let res = x.split('').map((e) => {
        if (e === 'a') {
            return 'b'
        } else if (e === 'b') {
            return 'a'
        } else {
            return e
        }
    }).join('')
    return res
}

// One line:
function switcheroo(x) {
    return [...x].map(v => v == 'a' ? v = 'b' : v == 'b' ? v = 'a' : v).join('');
}