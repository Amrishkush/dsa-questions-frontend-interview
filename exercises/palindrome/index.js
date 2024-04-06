// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false
                   
                     //solution 1     //reverse is fine with space means while split space also counted inside array
// function palindrome(str) {
//     let reversedArr = str.split("").reverse().join("")
//     if(reversedArr === str){          // instead of if else here we can use just return str === reversedArr    as it always gives boolean on checking
//         return true
//     } else { 
//         return false 
//     }
// }
                      //solution 2  but after half matching its ok but it will matched other half also it will be extra
function palindrome(str){   
    return str.split("").every((char, index)=> char === str[str.length - index - 1])      //will return true on matching
}

console.log(palindrome("amrish Pratap"))
module.exports = palindrome;
