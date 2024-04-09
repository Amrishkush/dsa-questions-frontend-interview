// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0
                       
                             //solution completely by see second for loop or statement written if not present otherwise it will give errror
// function vowels(str) {
//     let vowel = ["a", "e", "i" , "o" , "u"]
//     let chars = {}
//     let noOfVowels = 0
//     for(let char of str.toLowerCase()){
//         chars[char] = chars[char] + 1 || 1
//     }

//     for (let i = 0 ; i < vowel.length; i++){
//         let vowelMap = vowel[i]
//         noOfVowels = noOfVowels + (chars[vowelMap] || 0)   //this is because if that character won't be available then add 0 otherwise add if we don't do this then it will show undefined for which no character in teh string on adding it will show then nan
//     }
//     return noOfVowels;
// }

                       //solution 2 helped by chatgpt in includes   //safer bet to do
// function vowels(str){     
//     let vowel = ["a", "e", "i" , "o" , "u"]          //but this is suggested best in array
//     //let vowel = "aeiou"    //in both the solution for loop or includes will work fine array also have includes 
//     let noOfVowels = 0
//     for(let char of str.toLowerCase()){
//         if(vowel.includes(char)){
//             noOfVowels++
//         }
//     }
//     return noOfVowels
// }
                      //solution 3 it can be done with regxp very easily
function vowels(str){
     const matches = str.match(/[aeiou]/gi)  //so here what we have to check put in array and g is for to go to every character dont stop on match and i is for insensitve means like lowercase or uppercase doesn't matter 
     //above if found it return that in array if nothing found will return null so we checked condition below if found then matches.length otherwise 0 not printed null
     return matches ? matches.length : 0
}
console.log(vowels("Amrish Pratap Singh"))
module.exports = vowels;
