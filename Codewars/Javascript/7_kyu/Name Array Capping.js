// Description:
// Create a method that accepts an array of names, and returns an array of each name with its first letter capitalized.

// example

// capMe(['jo', 'nelson', 'jurie'])     // returns ['Jo', 'Nelson', 'Jurie']
// capMe(['KARLY', 'DANIEL', 'KELSEY']) // returns ['Karly', 'Daniel', 'Kelsey']

// My Solution:
function capMe(names) {
  let res = names.map((e) => {
    return e.slice(0, 1).toUpperCase() + e.slice(1).toLowerCase();
  });
  return res;
}
