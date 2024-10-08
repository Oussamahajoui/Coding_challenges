// Description:
// Complete the solution so that it returns the number of times the search_text is found within the full_text. Overlap is not permitted : "aaa" contains 1 instance of "aa", not 2.

// Usage example:

// full_text = "aa_bb_cc_dd_bb_e", search_text = "bb"
//     ---> should return 2 since "bb" shows up twice

// full_text = "aaabbbcccc", search_text = "bbb"
//     ---> should return 1

// My Solution:
function solution(fullText, searchText) {
  let res = 0;
  let l = 0;
  let r = searchText.length;
  while (r <= fullText.length) {
    const substring = fullText.slice(l, r);
    if (substring === searchText) {
      res++;
    }
    l++;
    r++;
  }
  return res;
}

//Simpler way:
function solution(fullText, searchText) {
  return fullText.split(searchText).length - 1;
}
