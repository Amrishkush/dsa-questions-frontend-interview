// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

              //solution 2      //i have done completely and study well   //but not best solution due to slice creates n2 complexity

// function chunk(array, size) {
//     let chunkedArray = []
//     for(let i = 0 ; i < array.length; i=i+size ){
//         let slicedArray = array.slice(i, i+size)     
//         chunkedArray.push(slicedArray)
//     }
//     return chunkedArray;
// }

// Time Complexity: O(n^2) in the worst case, where n is the size of the input array. This is because for each chunk, the slice() method creates a new array, which takes O(n) time, and this operation is performed for each chunk in the array.

// Space Complexity: O(n^2) in the worst case. This is because the slice() operation creates a new array for each chunk, and the total number of elements across all chunks can be at most quadratic in the size of the input array.
              
                // solution 2 understand it well This is good solution    n times in both    //understand the flow one by one then we can get
// function chunk(array, size){
//     let chunkedArray = []

//     for (let element of array){
//         const last = chunkedArray[chunkedArray.length - 1]          //its giving last chunk and then we are checking below 
//         if(!last || last.length === size){     //if not last of last chunk is full then creating new chunk and pushing with element
//             chunkedArray.push([element])
//         } else {
//             last.push(element)                    //else if not equal to size then it will be pushed to last array 
//         }
//     }
//     return  chunkedArray 
// }

// For each element, it checks the last chunk in the chunkedArray using chunkedArray[chunkedArray.length - 1].
// If there is no last chunk (!last), or if the last chunk is already full (its length equals size), it creates a new chunk containing the current element and pushes it into chunkedArray.
// If the last chunk is not full, it adds the current element to the last chunk.
                                   
                                            //solution 3 but logic is very much similar to 1st solution by for loop but this looks more neat and clean
function chunk(array, size){
    let chunkedArray = []
    let index = 0
    while(index < array.length){
        chunkedArray.push(array.slice(index, index + size))
        index = index + size    //shortcut index += size
    }
    return chunkedArray
}

console.log(chunk([1, 2, 3, 4], 2))
module.exports = chunk;
