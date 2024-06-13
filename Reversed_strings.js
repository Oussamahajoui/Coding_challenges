// DESCRIPTION:
// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// My Solution

function solution(str) {
    let arr = str.split('')
    arr = arr.reverse()
    let res = arr.join('')
    return res
}