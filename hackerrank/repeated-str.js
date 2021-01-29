// There is a string, , of lowercase English letters that is repeated infinitely many times. Given an integer, , find and print the number of letter a's in the first  letters of the infinite string.

// Example


// The substring we consider is , the first  characters of the infinite string. There are  occurrences of a in the substring.

// Function Description

// Complete the repeatedString function in the editor below.

// repeatedString has the following parameter(s):

// s: a string to repeat
// n: the number of characters to consider
// Returns

// int: the frequency of a in the substring
// Input Format

// The first line contains a single string, .
// The second line contains an integer, .

// Pseudocode
// Input a str and a limit int
// output number of occurences of char a within that limit
// we want to iterate over for the bounds
// have a counter and increase it for the duration
// the str repeats indefinitely
// so if str < n start str again

// how do we want to reset the str?
// probably want to iterate for n
// have pointer
// each step pointer++
// if we hit end of str (pointer > str.length) set pointer to 0

// this needs to be optimized
// if we are iterating over things for n and n is massive it will take a long time
// we can do near constant time evaluation
// do a pass over str to assign how many times a appears
// take n / s.length, floored
// use that value to multiply to find appearances
// take n % s.length to find remainder
// do a single final pass over str for that remainder 

const testS = 'aab';
const testN = 882787;

//expected 588525

function repeatedString(s, n) {
    let aCounter = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "a") {
            aCounter++;
        }
    }

    let aFreqCalc = Math.floor(n/s.length) * aCounter;
    const aFreqRemainder = n % s.length;

    if (aFreqRemainder) {
        for (let i = 0; i < aFreqRemainder; i++) {
            if (s[i] === "a") {
                aFreqCalc++;
            }
        }
    }
    
    return aFreqCalc;
}

console.log(repeatedString(testS,testN))