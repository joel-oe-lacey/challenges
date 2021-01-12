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

// need to check arr are same length
// should this matter? 
// want to iterate for combined length