// Problem outlined: https://www.hackerrank.com/challenges/diagonal-difference/problem?h_r=next-challenge&h_v=zen


// Pseudocode
// Input a 2D int array, first element dictactes row and column count
// subsequent elements are arrays representing rows
// we then want to fetch diagonals
// nested for loops, start i = 1
// take first and last element, add respectively to left & right sum
// on next i + 1, len - 1
// take difference of sums and return 

function diagonalDifference(arr) {
    let primarySum = 0;
    let secondarySum = 0;
    let n = arr[0].length - 1;

    for (let i = 0; i < arr.length; i++) {
        primarySum += arr[i][i]
        secondarySum += arr[i][n]
        n--
    }

    return Math.abs(primarySum - secondarySum)
}