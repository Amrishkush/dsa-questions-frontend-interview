// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

//Other Questions which can be helped solving this question
//Que - What is the common character in the string?
//Que - Does string A have same characters in quantity as in string B (is it an anagram)?
//Que - Does the given string have any repeated characters in it?

//To solve problems we will convert string into object characters key and number appeared properties
//{h:1, e:3, I:2} storing lke this

//solution 1
// function maxChar(str) {
//     let chars = {}
//     for(let char of str){
//         if(!chars[char]){
//             chars[char] = 1         //chars[char] gives value
//         } else {
//             chars[char]++
//         }
//     }
//     const max = Math.max(...Object.values(chars))
//     const maxUsedChar = Object.keys(chars).find((key)=> chars[key]=== max )
//     return maxUsedChar
// }

//solution2
// function maxChar(str) {
//   let chars = {};
//   for (let char of str) {
//     chars[char] = chars[char] + 1 || 1;    //adds values
//   }
//   const max = Math.max(...Object.values(chars));   //spreading all object values and find maximum of all  //will give values in array
//   const maxUsedChar = Object.keys(chars).find((key) => chars[key] === max);   //find will also find but not multiple if more have same values which first with max will show here tests are build for only one
// //    accessing all the keys of chars object and finding the keys with equal to max no
// //   const maxUsedChar = Object.keys(chars).filter((key) => chars[key] === max);  //filter will find all with values with max in the array form here test is for only 1 so we are using find not filter
//   console.log(chars)
//   return maxUsedChar;
// }

//solution3
function maxChar(str){
    const chars = {}
    let maxNo = 0
    let maxChar = ""
    
    //for of used in iteration of array and string
    for(let char of str){
        if(!chars[char]){
            chars[char] = 1         //will add key and value itself
        } else {
            chars[char]++
        }
    }
    //for in used for iteration of objects
    for(let char in chars){
        if(chars[char] > maxNo){
            maxNo = chars[char]     //will iterate if first key value is 1 then registered but next key value is 2 then again will get updated in maxNo and maxChar
            maxChar = char
        }
    }
return maxChar
}
console.log(maxChar("pratap"))
module.exports = maxChar;
