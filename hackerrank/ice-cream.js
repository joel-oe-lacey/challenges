// Each time Sunny and Johnny take a trip to the Ice Cream Parlor, they pool their money to buy ice cream. On any given day, the parlor offers a line of flavors. Each flavor has a cost associated with it.

// Given the value of  and the  of each flavor for  trips to the Ice Cream Parlor, help Sunny and Johnny choose two distinct flavors such that they spend their entire pool of money during each visit. ID numbers are the 1- based index number associated with a . For each trip to the parlor, print the ID numbers for the two types of ice cream that Sunny and Johnny purchase as two space-separated integers on a new line. You must print the smaller ID first and the larger ID second.

// For example, there are  flavors having . Together they have  to spend. They would purchase flavor ID's  and  for a cost of . Use  based indexing for your response.

// Note:

// Two ice creams having unique IDs  and  may have the same cost (i.e., ).
// There will always be a unique solution.
// Function Description

// Complete the function whatFlavors in the editor below. It must determine the two flavors they will purchase and print them as two space-separated integers on a line.

// whatFlavors has the following parameter(s):

// cost: an array of integers representing price for a flavor
// money: an integer representing the amount of money they have to spend
// Input Format

// The first line contains an integer, , the number of trips to the ice cream parlor.

// Each of the next  sets of  lines is as follows:

// The first line contains .
// The second line contains an integer, , the size of the array .
// The third line contains  space-separated integers denoting the .
// Constraints

// Output Format

// Print two space-separated integers denoting the respective indices for the two distinct flavors they choose to purchase in ascending order. Recall that each ice cream flavor has a unique ID number in the inclusive range from  to .

// Pseudocode 
// input arr of costs and money to spend
// output index of ice cream to purchase (index starting at 1)
// there can be more than two trips? input doesn't seem to allow it despite that being outlined.
// start with a case assuming it's set to two
// as we go through the numbers we want to find the remainder to the total money and add tracker with remainder as key and index of orig num as value
// this could potentially be expanded to greater bounds if grouped permutations of possible answers are kept, though that grows exponentially.
// for the two pair though, if the next number stepped over is in tracker, return index and curr index in that order.
// if not "not possible"

const testCost = [ 1, 4, 5, 3, 2 ];
const testMoney = 4;
const testCost2 = [ 2, 2, 4, 3 ]
const testMoney2 = 4;

function whatFlavors(cost, money) {
    const diffTracker = {};

    for (let i = 0; i < cost.length; i++) {
        if (diffTracker[cost[i]]) {
            console.log(`${diffTracker[cost[i]]} ${i + 1}`)
        } else {
            diffTracker[money - cost[i]] = i + 1;
        }
    }
}

console.log(whatFlavors(testCost2, testMoney2))