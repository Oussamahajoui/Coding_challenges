// DESCRIPTION:
// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

// My Solution:
function correct(string) {
    let res = []
    for (let c of string) {
        if (c === '5') {
            res.push('S')
        } else if (c === '0') {
            res.push('O')
        } else if (c === '1') {
            res.push('I')
        } else {
            res.push(c)
        }
    }
    return res.join("")
}

// Other Solution:
function correct(string) {
    return string.replaceAll('0', 'O').replaceAll('1', 'I').replaceAll('5', 'S');
}