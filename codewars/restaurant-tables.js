//<--------- Pseudocode ----------->
//create a queue to track single tables and double tables
//iterate over t, one by one fill out tables

//single customer, check the 1 tables
//if available, pop one off
//otherwise check double tables
//if there's a one top, unshift that
//if there's only two tops, fill one space (pop off a 2 add a 1)
//otherwise add to rejected

//if we have a double customer
//check two tops, if there's a two, pop off
//otherwise add to rejected 

//input a an int of # of single tables, b an int of # of double tables, t an array of customers coming in, sorted chronologically
//output should be an int/counter of the number of customers that must be turned away 

//<--- Finalization of our initial attempt --->
// function restaurant(a,b,t){
// //// vanilla
//   let rejections = 0;
//   let singles = [];
//   let doubles = [];
//   let occpDouble = [];

//   for (let i = 0; i < a; i++) {
//     singles.push(1);
//   }
//   for (let i = 0; i < b; i++) {
//     doubles.push(2);
//   }
// //// ES6 array building 
// //   let singles = [...new Array(a)];
// //   let doubles = [...new Array(b)];

// //// add int values in place of undefined 
// //   singles = singles.map(() => 1)
// //   doubles = doubles.map(() => 2)

//   t.forEach(customer => {
//     //if single customer
//     if(customer === 1) {
//       //check if there's an available singles table
//       if(singles.length) {
//         singles.pop();
//         //otherwise check if there's a doubles table
//       } else if (doubles.length) {
//         //if so remove a double and add an occupiedDouble
//         doubles.pop()
//         occpDouble.push(1)
//         //check for occupied doubles as final fallback
//       } else if(occpDouble.length) {
//         occpDouble.pop()
//       } else {
//         //if there are neither left, reject customer
//         rejections = rejections + customer;
//       }
//       //if double customer
//     } else if (customer === 2) {
//       //check for available double
//       if(doubles.length) {
//         doubles.pop()
//       } else {
//         //if none are left, reject 
//         rejections = rejections + customer;
//       }
//     }
//   })

//   return rejections;
// }

//<-------------- Alternate ---------------->
//we don't actually need the arrays as we aren't using them as stacks, we're just using them as counters 
//Here's a solution just using counters which comes out more readable also 
const restaurant = (a, b, t) => {
    let rejections = 0;
    let singles = a;
    let doubles = b;
    let occpDouble = 0;

    t.forEach(customer => {
        if (customer === 1) {
            if (singles) {
                singles--;
            } else if (doubles) {
                doubles--;
                occpDouble++;
            } else if (occpDouble) {
                occpDouble--;
            } else {
                rejections = rejections + customer;
            }
        } else if (customer === 2) {
            if (doubles) {
                doubles--;
            } else {
                rejections = rejections + customer;
            }
        }
    })

    return rejections;
}

restaurant(0, 2, [1, 1, 2])