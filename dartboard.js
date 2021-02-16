// Pseudocode 
// Input score int 
// Output all possible ways to reach that score, 2d arr ints

// Dartboard Structures 
// Regular 
// double score
// triple score
// outer bulls eye 25
// inner bulls eye 50 
// construct a structure to represent dartboard 

// calculating a single dart
// have all numbers 1-20, can double & triple, 25, 50
// checking itteratively, that score - num === 0 , score - (num * 2), * 3 === 0,
// precalc all possible options
    // SET to remove duplicates, this all our possible values

// recursively find all possible solutions
// 120
// 60, 60
// 20: [[20]]

// 

const constructDartboard = () => {
    const dartboard = new Set();

    const numArr = [...Array(20).keys()]
    
    numArr.forEach(num => {
        dartboard.add(num)
        dartboard.add(num * 2)
        dartboard.add(num * 3)
    })

    dartboard.add(25);
    dartboard.add(50);

    // dartboard.delete(0);

    return dartboard;
}

const findPossibleDartScore = score => {
    const dartboard = constructDartboard();
    if(dartboard.has(score)) {
        return [[score]];
    }
    return [[]];
}

const display2DArr = finalArr => {
    console.log(JSON.stringify(finalArr));
}

display2DArr(findPossibleDartScore(20))

console.log('dartboard', constructDartboard())

