//problem description
//https://www.hackerrank.com/challenges/compare-the-triplets/problem

function compareTriplets(a, b) {
    //have two arrays
    //want to compare them in tandem
    //do we need any error checking?
    if (a.length !== b.length) {
        return 'Score records unbalanced';
    }
    
    const scores = [0,0]
    
    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            scores[0]++;
        } else if (a[i] < b[i]) {
            scores[1]++;
        }
    }
    
    return scores;
}