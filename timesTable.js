// Create a function that accepts dimensions, of Rows x Columns, as parameters in order to create a multiplication table sized according to the given dimensions. **The return value of the function must be an array, and the numbers must be Fixnums, NOT strings.

// Example:

// multiplication_table(3,3)

// 1 2 3
// 2 4 6
// 3 6 9

// -->[[1,2,3],[2,4,6],[3,6,9]]

// Each value on the table should be equal to the value of multiplying the number in its first row times the number in its first column.

//PSEUDOCODE
//first row in matrix is always an index capped at first param
//we then want to iterate through row/array
//for as long as i < second param
    //create an array with a clone of the first * i 
    //i start at 2

const multiplicationTable = (row, col) => {
    const timesTable = [new Array(col)];

    for (let i = 2; i <= row; i++) {
        timesTable.push(timesTable[0].map(num => num * i)) 
    }

    return timesTable;
}

console.log(multiplicationTable(3,3))