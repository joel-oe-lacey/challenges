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

function repeatedString(s, n) {
    let sIndex = 0,
        aCounter = 0;

    for (let i = 0; i < n + 1; i++) {
        if(s[sIndex] === "a") {
            aCounter++;
        }

        sIndex++;
        if(sIndex > s.length - 1) {
            sIndex = 0;
        }
    }

    return aCounter;
}
