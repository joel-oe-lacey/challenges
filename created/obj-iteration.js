// Creating a set of object iteration challenges for those working on that skill set
////////////////////////////////////////////////////
// PROBLEM #1 ///////////////////////////////////////
////////////////////////////////////////////////////

const sportTeams = {
  swim: [
    { name: 'Brittany', level: 'Varsity' },
    { name: 'Jonas', level: 'Junior Varsity' }
  ],
  track: [
    { name: 'Amelia', level: 'Freshman Team' },
    { name: 'Robert', level: 'Junior Varsity' }
  ],
  crew: [
    { name: 'Jennifer', level: 'Junior Varsity' },
    { name: 'Jordan', level: 'Varsity' }
  ]
};

const athleteNames = [];

// Iterate over every key in the sportTeams object.
// For each team, iterate over the array of athletes
// on that team and push the athlete's name into the
// athleteNames array so that when you've finished your
// loop, the athleteNames array looks like so:
// ['Brittany', 'Jonas', 'Amelia', 'Robert', 'Jennifer', 'Jordan']