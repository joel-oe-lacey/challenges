// Who is the killer?
// Some people have been killed!
// You have managed to narrow the suspects down to just a few. Luckily, you know every person who those suspects have seen on the day of the murders.

// Task.
// Given a dictionary with all the names of the suspects and everyone that they have seen on that day which may look like this:

// {'James': ['Jacob', 'Bill', 'Lucas'],
//  'Johnny': ['David', 'Kyle', 'Lucas'],
//  'Peter': ['Lucy', 'Kyle']}
// and also a list of the names of the dead people:

// ['Lucas', 'Bill']
// return the name of the one killer, in our case 'James' because he is the only person that saw both 'Lucas' and 'Bill'

//PSEUDOCODE 
//forEach over the names
//then do object.keys over victims 
//can then hit an includes to check for presence.
//all have to be true
//short on first match
//unclear from problem description if there can be multiple "killers"
//time complexity here is a bit high 

const suspects = {'James': ['Jacob', 'Bill', 'Lucas'],
 'Johnny': ['David', 'Kyle', 'Lucas'],
 'Peter': ['Lucy', 'Kyle']}
const suspects2 = {'Brad': [], 'Megan': ['Ben', 'Kevin'], 'Finn': []}
const victims = ['Lucas', 'Bill'];
const victims2 = ['Ben'];

const detective = (suspectInfo, dead) => {
    let killer = '';

    const checkGuilt = (suspect) => {
        return dead.reduce((isGuilty, victim) => {
            if(!suspectInfo[suspect].includes(victim)) {
                isGuilty = false;
            }

            return isGuilty;
        }, true)
    }

    while (!killer) {
        Object.keys(suspectInfo).forEach(suspect => {
            if(checkGuilt(suspect)) {
                killer = suspect;
            }
        })
    }

    return killer;
}

detective(suspects1, victims1)