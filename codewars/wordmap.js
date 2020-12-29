//You want to build a word cloud, an infographic where the size of a word corresponds to how often it appears in the body of text.
//Utilize a map

//<--Pseudocode--> 
//input, string of words
//output, wordsToCounts property should contain a map with words as keys, and number of occurences as their values

//want to split on spaces, iterate over words. Lowercase those words and then add them to the map. 
//if present set value = value + 1

//we'll need to account for edge cases such as special characters or punctuations in between words
//create basic structure first and then add that handling

//Regex use is forbidden. To handle special characters, have a forbidden characters set? 
    //could run lots of character replacements 

//Given structure
class WordCloudData {
    constructor(inputString) {
        this.wordsToCounts = new Map();
        this.populateWordsToCounts(inputString);
    }

    populateWordsToCounts(inputString) {
        const wordArr = inputString.split(' ');

        wordArr.forEach(word => {

            
            if(this.wordsToCounts.has(word)) {
                const currentCount = this.wordsToCounts.get(word);
                this.wordsToCounts.set(word, currentCount++);
            } else {
                this.wordsToCounts.set(word, 1);
            }
        })
    }
}

let desc = 'simple sentence';
let result = new WordCloudData('I like cake').wordsToCounts;
console.log(result)
