// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'
             
            //solution 1
// function reverse(str) {
//     return str.split("").reverse().join("")

// }
            //solution 2
// function reverse(str){
//         let reverseString =""
//         for(let char of str){                          //normal for can be used but then we will do by index
//             reverseString = char + reverseString
//         }
//         return reverseString
// }

            //solution 3   //will impress interviewer all are good
function reverse(str){
    return str.split("").reduce((reversed, character)=> character + reversed,"") 
    // return str.split("").reduce((reversed, character)=>{return character + reversed}, "")   //both is same only "" in reduce is starting with like above soln 2 intitilaization.
}

console.log(reverse("amrish"))
module.exports = reverse;
