/**
 * These tasks are more complicated! Using combinations of arrays and objects is very common, here you will need to combine what you know about both to complete the tasks.
 */

unitedKingdom = [
  {
    name: "Scotland",
    capital: "Edinburgh",
    population: 5454000,
    touristAttractions: ["Stirling Castle", "Loch Ness"],
  },
  {
    name: "England",
    capital: "London",
    population: 55980000,
  },
  {
    name: "Wales",
    capital: "Swansea",
    population: 3163000,
    touristAttractions: ["Snowdonia"],
  },
  {
    name: "Northern Ireland",
    capital: "Belfast",
    population: 1885000,
    touristAttractions: ["Titanic Museum", "Giant's Causeway"],
  },
];

/**
 * Q1. Add some tourist attractions to England
 */

// COMPLETE

// unitedKingdom[1].touristAttractions = ["Buckingham palace"]

// england = unitedKingdom[1]

// console.log(england);

/**
 * Q2. Change the capital of Wales to "Cardiff"
 */

// COMPLETE

// wales = unitedKingdom[2]

// wales ["capital"] = "Cardiff"

// console.log(wales);

/**
 * Q3. Find a method in the documentation which will give you all of the available keys for Northern Ireland
 */


northernIreland = unitedKingdom[3];

northernIrelandKeys = Object.keys(northernIreland);

console.log(northernIrelandKeys);

/**
 * Q4. Use an if statement to compare the population of Scotland to the other countries 
 * and print out if it is the biggest, smallest or somewhere in the middle.
 */

// if (unitedKingdom[0].population < unitedKingdom.population[1,2,3]){
//      console.log("smallest");
// } else if (unitedKingdom[0].population > unitedKingdom.population[1,2,3]){
//     console.log("bigggest");
// } else {
//   (unitedKingdom[0].population === unitedKingdom.population[1,2,3])
// } 
// console.log("somewhere in the middle");


otherCountriesPopulation = unitedKingdom[1].population + unitedKingdom[2].population + unitedKingdom[3].population

// Make if statement to compare Scotland with England, Wales and Northen Ireland


if (unitedKingdom[0].population < otherCountriesPopulation){
     console.log("smallest");
} else if (unitedKingdom[0].population > otherCountriesPopulation){
    console.log("bigggest");
} else {
  console.log("somewhere in the middle");
}

