// Problem: https://www.codewars.com/kata/5b358a1e228d316283001892

// Pseudocode
// create a string tracker object
// split string, lowercase letter, place it into tracker
// at the end recompose tracker into string, reduce
// repeat to compose stars 
// need to preserve some sort of order however
// use a Map 

function getStrings(city){
    const charMap = new Map();
    const re = /[A-Za-z+]/g;
    
    let result = '';

    for (let i = 0; i < city.length; i++) {
        if (charMap.has(city[i])) {
            const charCountIterated = charMap.get(city[i])++;
            charMap.set(city[i], charCountIterated)
        } else {
            charMap.set(city[i], 1)
        }
    }

    charMap.forEach((val, key) => {
        result += `${key}:${'*'.repeat(val)},`
    })

    return result.substring(0, result.length - 1);
}