// A student is taking a cryptography class and has found anagrams to be very useful. Two strings are anagrams of each other if the first string's letters can be rearranged to form the second string. In other words, both strings must contain the same exact letters in the same exact frequency. For example, bacdc and dcbac are anagrams, but bacdc and dcbad are not.

// The student decides on an encryption scheme that involves two large strings. The encryption is dependent on the minimum number of character deletions required to make the two strings anagrams. Determine this number.

// Given two strings,  and , that may or may not be of the same length, determine the minimum number of character deletions required to make  and  anagrams. Any characters can be deleted from either of the strings.

// Example


// Delete  from  and  from  so that the remaining strings are  and  which are anagrams. This takes  character deletions.

// Function Description

// Complete the makeAnagram function in the editor below.

// makeAnagram has the following parameter(s):

// string a: a string
// string b: another string
// Returns

// int: the minimum total characters that must be deleted
// Input Format

// The first line contains a single string, .
// The second line contains a single string, .

// Constraints

// The strings  and  consist of lowercase English alphabetic letters, ascii[a-z].
// Sample Input

// cde
// abc
// Sample Output

// 4
// Explanation

// Delete the following characters from the strings make them anagrams:

// Remove d and e from cde to get c.
// Remove a and b from abc to get c.
// It takes  deletions to make both strings anagrams.

// Pseudocode
// input of two strings
// output an int of number of characters to delete
// probably want to have a tracker of characters for each word
// sum total of differences is number of characters to delete 
// if we used a hash tracker how to compare obj? 
// what is our iterator?
// always the longest word? hash tracker of longest word (l).
// shorter word (s)
// if char of l is also on s 
    // if same count do nothing
    // if greater on either side add to deletion count
    // remove from both
// if char of l is not on s
    // add to deletion count
    // remove from l
// at end of l
// run over s
    // add values to deletion count 
