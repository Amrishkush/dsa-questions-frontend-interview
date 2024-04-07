// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'
                            
                        //solution 1        Done completely by me
// function capitalize(str) {
//     let capitalizedArray =[]
//     for(let element of str.split(" ")){
//         capitalizedArray.push(element[0].toUpperCase() + element.slice(1))
//     }

//     return capitalizedArray.join(" ")
// }

                      //solution 2
function capitalize(str){
    let result = str[0].toUpperCase()   //problem is first character we have to uppercase separately
      //for of cant be used here because we iterate from 2 no and character on which left is space is capitalized
    for(let i = 1; i < str.length; i++){   //will start from second leaving first 
        if(str[i-1] === " "){
            result += str[i].toUpperCase()
        } else {
            result += str[i]
        }
    }
      return result
}

console.log(capitalize("amrish pratap singh"))
module.exports = capitalize;
