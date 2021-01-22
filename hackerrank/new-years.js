// It is New Year's Day and people are in line for the Wonderland rollercoaster ride. Each person wears a sticker indicating their initial position in the queue. Initial positions increment by  from  at the front of the line to  at the back.

// Any person in the queue can bribe the person directly in front of them to swap positions. If two people swap positions, they still wear the same sticker denoting their original places in line. One person can bribe at most two others. For example, if  and  bribes , the queue will look like this: .

// Fascinated by this chaotic queue, you decide you must know the minimum number of bribes that took place to get the queue into its current state. If anyone has bribed more than two people, the line is too chaotic to compute the answer.

// Function Description

// Complete the function minimumBribes in the editor below.

// minimumBribes has the following parameter(s):

// int q[n]: the positions of the people after all bribes
// Returns

// No value is returned. Print the minimum number of bribes necessary or Too chaotic if someone has bribed more than  people.
// Input Format

// The first line contains an integer , the number of test cases.

// Each of the next  pairs of lines are as follows:
// - The first line contains an integer , the number of people in the queue
// - The second line has  space-separated integers describing the final state of the queue.

// Constraints

// Subtasks

// For  score 
// For  score 

// Sample Input

// 2
// 5
// 2 1 5 3 4
// 5
// 2 5 1 3 4
// Sample Output

// 3
// Too chaotic
// Explanation

// Pseudocode 
// We want a tracker of bribes
// perform indexing calc to determine spots of each?

// Consideration Questions
// Do bribes have to start from the back? 
// If no person can bribe more than two, is it their value - 3 to determine max range (starts at 1)
// 


// Step through example 
// bribe counter 0
// 2 1 5 3 4
// 2 had to bribe
    // 2 - (i + 1) - offset (0)
    // bribe counter 1
    // offset counter 1
// 1 offset by 1 bribe (counter), didn't move
    // 1 - ((2) - 1)
    // correct position
    // no bribe, reset offset
// 5 
    // 5 - (3)
        // bribe counter 3
        // offset counter (2)
// 3 
    // 3 - (4 - 1)
    // correct position
    // offset counter - 1 (1)
    // reset offset

// 4
    // 4 - (5 - 1)
    // offset counter 1 (0)

// can we just use that bribe count, how much do we need to be working out position
// short if > 2 

// 2 1 5 4 3
// 2, 
    // bribe counter 1
    // offset counter 1
// 1 , -1 don't add
    // bribe counter 1
    // offset counter 0
// 5, 
    // bribe counter 3 
    // offset counter 2 
        //only one number in front, despite two bribes 
// 4 
    // doesn't match offset counter?
    // how do I know I should expect 3 here? 
        //expected num - offset 
        // num - (i + 1) - offset 
        // should be 3 
            //bribe counter 4
            // offset counter +1
// 3
    // 3 - (5 - 2)
        // not skip
        // offset counter 2

// still trouble effectively tracking offset
    //how to track an offset that itself was offset?
    // reset when you have a non skip number? rather than just take one off 
    // offset should always take away 1, for as long as counter has value.

// https://www.hackerrank.com/challenges/new-year-chaos/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays