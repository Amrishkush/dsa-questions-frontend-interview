// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// function pyramid(n) {
//   let midpoint = Math.floor((2 * n - 1) / 2);
//   for (let row = 0; row < n; row++) {
//     let stair = "";
//     for (let column = 0; column < 2 * n - 1; column++) {
//       if (midpoint - row <= column && midpoint + row >= column) {
//         stair += "#";
//       } else {
//         stair += " ";
//       }
//     }
//     console.log(stair);
//   }
// }

function pyramid(n, row = 0, level = "") {
  if (row === n) {
    //if row completed return
    return;
  }
  if (level.length === 2 * n - 1) {
    //basically length determines here column single row all columns filled then console and call function with increased row no
    console.log(level);
    return pyramid(n, row + 1);
  }

  let midpoint = Math.floor((2 * n - 1) / 2);
  let add;
  if (midpoint - row <= level.length && midpoint + row >= level.length) {
    //we are checking where we are of midpoint
    add = "#"; //if true add will store pound
  } else {
    add = " "; //otherwise it will store the space
  }
  pyramid(n, row, (level = level + add)); //we will not change n and row but according to the condition we will update level again it will check level.length and if doesn't satisfy then again it will come for the adding pound or space then again recall
}
pyramid(3);
module.exports = pyramid;
