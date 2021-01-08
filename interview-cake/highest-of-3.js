// Given an array of integers, find the highest product you can get from three of the integers.
// The input arrayOfInts will always have at least three integers.

// Pseudocode
// We have an array of 3+ ints
// want to find highest product 
// iterate over starting at three, i === 2
// track first three numbers
// as we do we want to check if the next number is bigger than any of our current numbers
// if so replace lowest with new number
// repeat until end

// check if bigger than largest, if so push onto front
// if not, check if bigger than second, if so push in second
// if not, check if bigger than last, if so replace last 
// splicing into middle of arr bad for space complexity 

// this doesn't properly account for negatives
// to change this we'll also need to account for negatives 

// highest product 966
const exampleInput = [5, 14, 8, 22, 31, 4, 913]
// highest product 300
const secondaryInput = [-10, -10, 4, 3]

// const findHighestProduct = numArr => {
//     const maxValues = [Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER];

//     for (i = 0; i < numArr.length; i++) {
//         if (numArr[i] > maxValues[0]) {
//             maxValues.unshift(numArr[i]);
//             maxValues.pop();
//         } else if (numArr[i] > maxValues[1]) {
//             maxValues.splice(1, 0, numArr[i])
//             maxValues.pop();
//         } else if (numArr[i] > maxValues[2]) {
//             maxValues[2] = numArr[i]
//         }

//         console.log(maxValues)
//     }

//     return maxValues[0] * maxValues[1] * maxValues[2];
// }

const findHighestProduct = numArr => {
  let highest = Math.max(numArr[0], numArr[1]);
  let lowest  = Math.min(numArr[0], numArr[1]);

  let highestProductOf2 = numArr[0] * numArr[1];
  let lowestProductOf2  = numArr[0] * numArr[1];

  let highestProductOf3 = numArr[0] * numArr[1] * numArr[2];

  for (let i = 2; i < numArr.length; i++) {
    highestProductOf3 = Math.max(
      highestProductOf3,
      numArr[i] * highestProductOf2,
      numArr[i] * lowestProductOf2
    );

    highestProductOf2 = Math.max(
      highestProductOf2,
      numArr[i] * highest,
      numArr[i] * lowest
    );

    lowestProductOf2 = Math.min(
      lowestProductOf2,
      numArr[i] * highest,
      numArr[i] * lowest
    );

    highest = Math.max(highest, numArr[i]);

    lowest = Math.min(lowest, numArr[i]);
  }

  return highestProductOf3;
}

console.log(findHighestProduct(exampleInput))