// The absolute difference is the positive difference between two values  and , is written  or  and they are equal. If  and , . Given an array of integers, find the minimum absolute difference between any two elements in the array.

// Example. 

// There are  pairs of numbers:  and . The absolute differences for these pairs are ,  and . The minimum absolute difference is .

// Function Description

// Complete the minimumAbsoluteDifference function in the editor below. It should return an integer that represents the minimum absolute difference between any pair of elements.

// minimumAbsoluteDifference has the following parameter(s):

// int arr[n]: an array of integers
// Returns

// int: the minimum absolute difference found
// Input Format

// The first line contains a single integer , the size of .
// The second line contains  space-separated integers, .

// Pseudocode
// brute force first
// iteratively check everything
// need at least one run through 
// put them all into sorted list
// that gives you relative pairing of closest neighbors which will be your min
// step through, subtrack pairs starting at 1 and take absolute value 
// save min, update as you go if lower min comes along 
// use built in sort or write my own
// built in for now and then refactor 

const testCase = [-59,-36,-13,1,-53,-92,-2,-96,-54,75]

function minimumAbsoluteDifference(arr) {
    const sortedArr = arr.sort((a, b) => a - b);
    let minDiff = Number.MAX_SAFE_INTEGER;

    for (let i = 1; i < sortedArr.length; i++) {
        const currentDiff = Math.abs(sortedArr[i - 1] - sortedArr[i]);

        if (currentDiff < minDiff) {
            minDiff = currentDiff;
        }
    }

    return minDiff;
}

console.log(minimumAbsoluteDifference(testCase))