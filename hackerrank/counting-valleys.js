// An avid hiker keeps meticulous records of their hikes. During the last hike that took exactly  steps, for every step it was noted if it was an uphill, , or a downhill,  step. Hikes always start and end at sea level, and each step up or down represents a  unit change in altitude. We define the following terms:

// A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
// A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.
// Given the sequence of up and down steps during a hike, find and print the number of valleys walked through.

// Example

 

// The hiker first enters a valley  units deep. Then they climb out and up onto a mountain  units high. Finally, the hiker returns to sea level and ends the hike.

// Function Description

// Complete the countingValleys function in the editor below.

// countingValleys has the following parameter(s):

// int steps: the number of steps on the hike
// string path: a string describing the path
// Returns

// int: the number of valleys traversed
// Input Format

// The first line contains an integer , the number of steps in the hike.
// The second line contains a single string , of  characters that describe the path.

// Constraints

// Sample Input

// 8
// UDDDUDUU
// Sample Output

// 1
// Explanation

// If we represent _ as sea level, a step up as /, and a step down as \, the hike can be drawn as:

// _/\      _
//    \    /
//     \/\/
// The hiker enters and leaves one valley.

// Pseudocode 
// Have a tracker to determine how far off sea level hiker is (altitude)
// increment on U, decrement on D 
// we want to track only valleys (down below sea level and back up)
// track when value goes from -1 to 0, increment valley counter 
// altitude is -1, input is U 

function countingValleys(steps, path) {
    let altitude = 0,
        valleyCount = 0;

    for (let i = 0; i < steps; i++) {
        switch (path[i]) {
            case 'D':
                altitude--;
                break;
            default: 
                altitude++;
        }

        if(altitude === -1 && path[i]==="D") {
            valleyCount++;
        }
    }

    return valleyCount;
}
