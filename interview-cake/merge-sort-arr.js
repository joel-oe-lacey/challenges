// In order to win the prize for most cookies sold, my friend Alice and I are going to merge our Girl Scout Cookies orders and enter as one unit.

// Each order is represented by an "order id" (an integer).

// We have our lists of orders sorted numerically already, in arrays. Write a function to merge our arrays of orders into one sorted array.

// For example:

//   const myArray = [3, 4, 6, 10, 11, 15];
//   const alicesArray = [1, 5, 8, 12, 14, 19];

// console.log(mergeArrays(myArray, alicesArray));
// logs [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]

// Pseudocode 
// simple js is to join and run sort, uses insertion sort behind scenes, log n solution
// Pull the lowest number of two ind[0]
// track as you go
// keep pulling from one array as value is < than the other
// when it isn't swap
// just need a tracker of current element with each
// want to iterate for combined length

// edge case, arr of different size
// could stop loop and just concat remaining arr
// we want to run for combined length up to tail, we can't know where 

const mergeSortedArr = (arr1, arr2) => {
    const combinedLength = arr1.length + arr2.length;
    const combLengthNoTail = arr1.length >= arr2.length ? (combinedLength - (arr1.length - arr2.length)) : (combinedLength - (arr2.length - arr1.length));
    let result = [];

    let arr1Pointer = 0,
        arr2Pointer = 0;
        
    for (let i = 0; i < combLengthNoTail; i++) {
        if (arr1[arr1Pointer] <= arr2[arr2Pointer]) {
            result.push(arr1[arr1Pointer])
            if (arr1Pointer < arr1.length - 1) {
                arr1Pointer++
            }
        } else {
            result.push(arr2[arr2Pointer])
            if (arr2Pointer < arr2.length - 1) {
                arr2Pointer++
            }
        }
    }

    if (arr1.length > arr2.length) {
        const arr1Tail = arr1.splice(arr1Pointer, arr1.length - 1)
        result = result.concat(arr1Tail)
    } else if (arr2.length > arr1.length) {
        const arr2Tail = arr2.splice(arr2Pointer, arr2.length - 1)
        result = result.concat(arr2Tail)
    }

    return result;
}

  const testArr1 = [3, 4, 6, 10, 11, 15];
  const testArr2 = [1, 5, 8, 12, 14, 19, 20, 22, 25];

console.log(mergeSortedArr(testArr1, testArr2))