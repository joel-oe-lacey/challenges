// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
// Notes

// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

// Pseudocode
// could go through the string
// add all chars to char tracker
// then run through one more time and replace chars with respective symbol based on tracker
// 2n solution

const duplicateEncoder = strToEncode => {
    const dupTracker = {};

    for (let i = 0; i < strToEncode.length; i++) {
        let char = strToEncode[i].toLowerCase();
        if(dupTracker[char]) {
            dupTracker[char]++
        } else {
            dupTracker[char] = 1;
        }
    }

    for (let i = 0; i < strToEncode.length; i++) {
        let char = strToEncode[i].toLowerCase();

        if(dupTracker[char] > 1) {
            strToEncode[i] = '('
        } else {
            strToEncode[i] = ')'
        }
    }

    return strToEncode;
}