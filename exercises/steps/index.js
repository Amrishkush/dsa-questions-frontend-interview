// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'
                          //solution 1     //watch it again and think in the form of table row and column as well as console positioning is very essential also only console.log is good
                          //best for interview it is trick discuss in interview before solving in interview dont write straight away
function steps(n) {
   for(let row = 0; row< n; row++){
    let stair = ""
    for (let column= 0; column< n; column++){
        if(column <= row){
            stair+="#"
        } else {
            stair+=" "
        }
        
    }
    console.log(stair)
   }
}   

                        //solution 2       problem by recursion must study*****
// function steps(n, row=0, stair = " "){
//     if (n === row){
//         return;
//     }

//     if (n === stair.length){
//         console.log(stair)
//         return steps(n, row + 1)
//     }

//     if(stair.length <= row){
//         stair += "#";
//     } else {
//         stair += " "
//     }

//     steps(n, row, stair)

// }
steps(2)
module.exports = steps;
