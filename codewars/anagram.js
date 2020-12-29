// What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

// 'abba' & 'baab' == true

// 'abba' & 'bbaa' == true

// 'abba' & 'abbba' == false

// 'abba' & 'abca' == false

// Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

// anagrams('laser', ['lazing', 'lazy',  'lacer']) => []

//PSEUDOCODE
//we want to track success case for anagram 
//a hash tracker would be a performant way to do this
//take initial word, use hash tracker function for letter appearance
//then compare other words against base frequency map
    //will need to do object comparison here
    //this is tricky and rarely performant
    //could do a keys and value comp, or a stringified comp

    //instead of utilizing one tracker function, run an initial storage on first word
    //then do a live comparison on words arr
        //remove key if count hits 0 in tracker as you iterate over letters
//if word passes check, add to result array



const anagrams = (word, words) => {
    const initLetterMap = (initWord) => {
        const letterMap = {}
        
        for (let i = 0; i < initWord.length; i++) {
            if (!letterMap[initWord[i]]) {
                letterMap[initWord[i]] = 1
            } else {
                letterMap[initWord[i]] += 1
            }
        }

        return letterMap;
    }

    const checkAnagramMatch = (wordToCheck, freqMap, answerStore) => {
        let unmatchedChar = false;
        const baseWordCount = {
            ...freqMap
        }
        
        for (let i = 0; i < wordToCheck.length; i++) {
            if (baseWordCount[wordToCheck[i]]) {
                baseWordCount[wordToCheck[i]] -= 1;
            } else {
                unmatchedChar = true;
            }
            
            if (baseWordCount[wordToCheck[i]] === 0) {
                delete baseWordCount[wordToCheck[i]];
            }
        }
        
        if (!Object.keys(baseWordCount).length && !unmatchedChar) {
            answerStore.push(wordToCheck)
        }
    }
    
    const wordFreq = initLetterMap(word);
    const matchingAnagrams = [];

    words.forEach(word => {
        checkAnagramMatch(word, wordFreq, matchingAnagrams)
    })

    return matchingAnagrams;
}

console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']))