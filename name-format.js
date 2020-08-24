// PROBLEM
// Given: an array containing hashes of names

// Return: a string formatted as a list of names separated by commas except
// for the last two names, which should be separated by an ampersand.

// Example:

//     list([{
//         name: 'Bart'
//     }, {
//         name: 'Lisa'
//     }, {
//         name: 'Maggie'
//     }])
// // returns 'Bart, Lisa & Maggie'

// list([{
//     name: 'Bart'
// }, {
//     name: 'Lisa'
// }])
// // returns 'Bart & Lisa'

// list([{
//     name: 'Bart'
// }])
// // returns 'Bart'

// list([])
// // returns ''
// Note: all the hashes are pre - validated and will only contain A - Z, a - z, '-'
// and '.'.

//PSEUDOCODE
//we have an array of objects here, we'll want to return a single string
//reduce down the array of objects, accessing each name, and joining with ", " or " & " depending on index position

//if it's an empty array, return empty string
//if it's a single name, just return the name

//SOLUTION
const list = names => {
    return names.reduce((finalString, nameRecord, i, allNames) => {
        const {
            name
        } = nameRecord;

        if (i > 0 && i === allNames.length - 1) {
            finalString += ` & ${name}`;
        } else if (i > 0) {
            finalString += `, ${name}`;
        } else {
            finalString = name;
        }

        return finalString;
    }, '')
}

// list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}])

// list([{name: 'Bart'},{name: 'Lisa'}])

// list([{name: 'Bart'}])

// list([])