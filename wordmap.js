//You want to build a word cloud, an infographic where the size of a word corresponds to how often it appears in the body of text.
//Utilize a map

//<--Pseudocode--> 
//input, string of words
//output, wordsToCounts property should contain a map with words as keys, and number of occurences as their values

//want to split on spaces, iterate over words. Lowercase those words and then add them to the map. 
//if present set value = value + 1

//Given structure
class WordCloudData {
    constructor(inputString) {
        this.wordsToCounts = new Map();
        this.populateWordsToCounts(inputString);
    }

    populateWordsToCounts(inputString) {
        // Count the frequency of each word


    }

}
