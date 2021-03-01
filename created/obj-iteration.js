// Creating a set of object iteration challenges for those working on that skill set. A new example, and one referenced from prior work. 

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

////////////////////////////////////////////////////
// PROBLEM #2 ///////////////////////////////////////
////////////////////////////////////////////////////
const carBrands = {
  honda: {
    parent: 'Honda Motor Co.',
    slogan: 'The Power of Dreams',
    vehicles: [
      {model: 'Civic Type-R', type:'Sport', price: 40000},
      {model: 'CR-V', type:'SUV', price: 32000},
      {model: 'Accord', type:'Sedan', price: 20000 }
    ],
    headquarterCountry: 'Japan'
  },
  subaru: {
    parent: 'Subaru Co.',
    slogan: 'Love. It\'s what makes Subaru, a Subaru.',
    vehicles: [
      {model: 'Forrester', type:'Sedan', price: 24000},
      {model: 'WRX', type:'Sport', price: 32000},
      {model: 'BRZ', type:'Sport', price: 28000 }
    ],
    headquarterCountry: 'Japan'
  },
  renault: {
    parent: 'Renault Group',
    slogan: 'Passion for life',
    vehicles: [
      {model: 'Clio',  type:'Subcompact', price: 13000},
      {model: 'Megane', type:'SUV', price: 23500},
    ],
    headquarterCountry: 'France'
  },
  mercedes: {
    parent: 'Daimler AG',
    slogan: 'The Best or Nothing',
    vehicles: [
      {model: 'GLA', type:'SUV', price: 38000},
      {model: 'G-Class', type:'SUV', price: 132000},
      {model: 'AMG GT', type:'Sport', price: 90000},
      {model: 'C-Class', type:'Sedan', price: 49000},
    ],
    headquarterCountry: 'Germany'
  }
};

// Provide a array of all the parent companies 
// Expected Output ['Honda Motor Co.','Subaru Co.','Renault Group','Daimler AG']

// Return the slogan of the first company headquartered in Japan
// Expected Output 'The Power of Dreams'

// Return an array of all Sedans available for all manufactures
// Expected Output
// [{model: 'Accord', type:'Sedan', price: 20000 },{model: 'Forrester', type:'Sedan', price: 24000},{model: 'C-Class', type:'Sedan', price: 49000}]

// Return an object where the key is the manufacturer and the value is an array of the names of all the SUVs that manufacturer sells, include an empty array if the manufacturer does not sell any SUVs
// Expected Output
// {honda: ['CR-V'], subaru: [], renault: ['Megane'], mercedes:['GLA','G-Class']}

// Bonus
// Return an array containing the model name of the most expensive car for each manufacturer 
// Expected Output ['Civic Type-R','WRX','Megane','G-Class']