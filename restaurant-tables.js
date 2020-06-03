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