//PROBLEM
// Bob is preparing to pass IQ test.The most frequent task in this test is to find out which one of the given numbers differs from the others.Bob observed that one number usually differs from the others in evenness.Help Bob— to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and
// return a position of this number.

//     !Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1(not 0)

// ## Examples:

// iqTest("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even

// iqTest("1 2 1 1") => 2 // Second number is even, while the rest of the numbers are odd

//PSEUDOCODE
//list of numbers coming in as a string, we want to return the index (starting at 1) of the differing element 
//checking for the number that isn't odd or even
//what of edge cases? no numbers or multiple differences from the majority

//to start with split numbers on space
//from that need to find if numbers are more commonly odd or even
//then pick out the first opposite appearance and it's index
//can we just pass over once and 0(n) this?

//pass over and % 2 the number, if result !== 0, store index in odd or even set 
//find which set is greater at end and return 0 index of opposite 

//alternative approach that doesn't involve space complexity increase?
//peek first three numbers, determine prevalent type, set that divisor 
//use that in function to return index of first number found that matches 
