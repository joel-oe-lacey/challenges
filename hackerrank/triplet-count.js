// You are given an array and you need to find number of tripets of indices  such that the elements at those indices are in geometric progression for a given common ratio  and .

// For example, . If , we have  and  at indices  and .

// Function Description

// Complete the countTriplets function in the editor below. It should return the number of triplets forming a geometric progression for a given  as an integer.

// countTriplets has the following parameter(s):

// arr: an array of integers
// r: an integer, the common ratio
// Input Format

// The first line contains two space-separated integers  and , the size of  and the common ratio.
// The next line contains  space-separated integers .

// Constraints

// Output Format

// Return the count of triplets that form a geometric progression.

// Pseudocode
// input array of int and ratio int 
// output int of num of geometric progression triplets 

// exp num to ratio up to max 
// while calc < arr[arr.length - 1]
// put in dict

// iterate over numbers, check if first one is in
// check if next one is in & 1 greater than past 
// do up to 3 
// if possible tripleCounter++

// then start again 
// if not possible i++ 


// Examples
// r = 2
// 1 2 2 4

// r = 3
// 1 3 9 9 27 81

// generate hashmap {num, exp}
// {1: 0, 2: 1, 4: 2}
// just div by r? should be next whole num in seq

function countTriplets(arr, r) {
    const expoMap = {};
    let tripletCounter = 0,
        currExpo = 0,
        i = 0,
        j = 0;

    while (currExpo < arr[arr.length - 1]) {
        currExpo = Math.pow(r, i);
        expoMap[currExpo] = i;
        i++;
    }

    //outer while j
        // inner loop k 
    //step over numbers for loop
        // break loop if you hit currTriplet = 3
        // increase tripletCounter
    //get first value from exponent map
        // if val return
            //set expected next number (map return + 1)
            //currTriplet++
            // k++
        // if no return
            // j++
    //iterate to next number 
        // same seq 
            //if val return
                //same
            //if no return
                //k++
    // need a no answer condition 
        //currently infinite loop
        //now to make sure you can't access same grouping? 

    while (j < arr.length) {
        let currTriplet = 0,
        nextTripSeq = 0;

        if ()

    }
}
