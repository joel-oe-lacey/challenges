// A left rotation operation on an array shifts each of the array's elements  unit to the left. For example, if  left rotations are performed on array , then the array would become . Note that the lowest index item moves to the highest index in a rotation. This is called a circular array.

// Given an array  of  integers and a number, , perform  left rotations on the array. Return the updated array to be printed as a single line of space-separated integers.

// Function Description

// Complete the function rotLeft in the editor below.

// rotLeft has the following parameter(s):

// int a[n]: the array to rotate
// int d: the number of rotations
// Returns

// int a'[n]: the rotated array
// Input Format

// The first line contains two space-separated integers  and , the size of  and the number of left rotations.
// The second line contains  space-separated integers, each an .

// Constraints

// Sample Input

// 5 4
// 1 2 3 4 5
// Sample Output

// 5 1 2 3 4

// Pseudocode 
// easy route is just to unshift off first element and then push it onto the end
// this has some implications for space complexity, creating a temporary array each time on unshift
// also on the push a new temporary array is created
// start here

// for arr.length 
// start at 1
// arr[i - 1] = a[i]
// if last el (arr.length - 1) assign to tempFirst
// this GREATLY increases time complexity (Nn)

const testArr = [5,1,2,3,4];

function rotLeft(a, d) {        
    for (let i = 0; i < d; i++) {
        const tempFirst = a.shift();
        a.push(tempFirst); 
    }

    return a;
};

console.log(rotLeft(testArr, 4))