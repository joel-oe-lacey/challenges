// Given a  2D Array, :

// 1 1 1 0 0 0
// 0 1 0 0 0 0
// 1 1 1 0 0 0
// 0 0 0 0 0 0
// 0 0 0 0 0 0
// 0 0 0 0 0 0

// An hourglass in  is a subset of values with indices falling in this pattern in 's graphical representation:

// a b c
//   d
// e f g
// There are  hourglasses in . An hourglass sum is the sum of an hourglass' values. Calculate the hourglass sum for every hourglass in , then print the maximum hourglass sum. The array will always be .

// Pseudocode 
// We are going across nested arrays
// input is an arr or arrs (int)
// output should be int of largest hourglass sum 
// iterate through tracking max sum and updating incrementally 
// start with simple approach nested loops
// hourglass is three in present at i 
// one in i + 1 of next arr
// three in present at next next arr
// fetch sum, compare to max, if greater update tracker
// bound if we ever hit outer loop i + 2 > outerArr.length
// if any of these checks can't be performed (if i + 2 is > innerArr.length) 
// only need to check first arr bounds 
// at end return sum

// potentially max sums could be negative, don't want to use 0

function hourglassSum(arr) {
    let largestSum = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = 0; j < arr[i].length - 2; j++) {
            let currSum = arr[i][j] + arr[i][j + 1] + arr[i][j + 2] + arr[i + 1][j + 1] + arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2];

            if (currSum > largestSum) {
                largestSum = currSum;
            }
        }
    }

    return largestSum;
}

