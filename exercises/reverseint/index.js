// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9
                          //solution 1  done by me completely
// function reverseInt(n) {
//     if(n<0){
//         const numString = (n*-1).toString().split("").reverse().join("")
//         const num = parseInt(numString) * -1
//         return num
//     } else {
//        const numString =  n.toString().split("").reverse().join("")
//        return parseInt(numString)
//     }
// }

                        //solution 2
function reverseInt(n){
    const reversed = n.toString().split("").reverse().join("")
     return parseInt(reversed) * Math.sign(n)                     //it gives -1 or +1 on the basis of symbol both above are same only
}

console.log(reverseInt(90))
module.exports = reverseInt;
