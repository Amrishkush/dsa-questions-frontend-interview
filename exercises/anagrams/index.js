// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> False
//   anagrams('Hi there', 'Bye there') --> False


//this is helper function
// function createObjectOfString(str){     //function created object of characters of string and value by removing other symbols etc
//     let objectOfString = {}
//     for(let char of str.replace(/[^\w]/g).toLowerCase()){          //using regexp for the removing of symbol
//         objectOfString[char] = objectOfString[char] + 1 || 1        //to make entry in the object and nos of chars
//     }
//     return objectOfString
// }
                 
//                  //solution 1
// function anagrams(stringA, stringB) {
//     let objOfStringA = createObjectOfString(stringA)      //calling function made below and called to create object and remove symbols
//     let objOfStringB = createObjectOfString(stringB)
   
//     if(Object.keys(objOfStringA).length !== Object.keys(objOfStringB).length){       //if no of key in object is not equal then its impossible to be same chaaracter with same quantity
//         return false
//     }

//     for(let char in objOfStringA){
//         if(objOfStringA[char] !== objOfStringB[char]) {                  //above is not equal then here equal so we are companring 
//             return false                                                 //if objOfStringA[char] gives value and compares as well as if not available then also false 
//         }
//     }
//     return true 
// }

                 //solution 2
    function anagrams(stringA, stringB){
        let objOfStringA = sortString(stringA)
        let objOfStringB = sortString(stringB)
        if(objOfStringA === objOfStringB){
            return true;
        }
        return false

    }
    function sortString(str){     //function created object of characters of string and value by removing other symbols etc
        
        return str.replace(/[^\w]/g).toLowerCase().split("").sort().join("")
    }

console.log(anagrams('RAIL! SAFETY!', 'fairy tales'))
module.exports = anagrams;
