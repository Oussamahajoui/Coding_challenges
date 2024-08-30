// Description:
// You must implement a function that returns the difference between the largest and the smallest value in a given list / array (lst) received as the parameter.

// lst contains integers, that means it may contain some negative numbers
// if lst is empty or contains a single element, return 0
// lst is not sorted
// [1, 2, 3, 4]   //  returns 3 because 4 -   1  == 3
// [1, 2, 3, -4]  //  returns 7 because 3 - (-4) == 7
// Have fun!

// My Solution:
function maxDiff(list) {
    list = list.sort((a, b) => a - b)
    return list.length < 2 ? 0 : list[list.length - 1] - list[0]
};