// Problem: https://www.hackerrank.com/challenges/reduced-string/problem

// Pseudocode
// could perform same task repeatedly, checking for duplicate char and removing
// repeat until fail, good case for recursion
// alternatively with a single pass you could map all characters
// if even remove
// if odd, leave 1
// need to preserve order here though
// need to use different data structure than hash tracker
// queue: enqueue each character, dequeue if duplicate
// code both routes

//recursive route
//iterate over string, check char against previous char
//if match splice out, rejoin, pass new string back into same function
//on the else case, return final string 

// function superReducedString(s) {
//     let charTracker = {}

//     for (let i = 0; i < s.length; i++) {
//         if (charTracker[s[i]]) {
//             charTracker[s[i]]++
//         } else {
//             charTracker[s[i]] = 1
//         }
//     }

//     return Object.keys(charTracker).reduce((finalStr, letter) => {
//         if (charTracker[letter] % 2 !== 0) {
//             finalStr += letter;
//         }

//         return finalStr;
//     }, '')
// }

function superReducedString(s) {
    const strArr = s.split('')
    console.log('s', s)

    for (let i = 1; i < s.length; i++) {
        if (strArr[i] === strArr[i-1]) {
            strArr.splice(i-1, 2)
            superReducedString(strArr.join(''))
        } 

        if (i === s.length - 1) {
            return s;
        }
    }
}