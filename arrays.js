/**
 * In these tasks you will need to manipulate the array below in order to answer the questions. Some answers will require you to store the result in a variable, others will need you to inspect the whole array.
 */

stations = ["Dundee", "Edinburgh", "North Berwick", "Newcastle", "York", "Leeds", "Doncaster", "Peterborough"];


// console.log(stations);

/**
 * Q1.
 * The East Coast Main Line doesn't stop at Peterborough! Add London Kings Cross to the end of the array to complete the line.
 */

// console.log(stations);

stations.push("London Kings Cross");


/**
 * Q2.
 * It doesn't go as far as Dundee either, so remove it from the start of the array.
 */

// console.log(stations);

// delete stations[0];

// console.log(stations);

// stations.shift();

// console.log(stations);

/**
 * Q3.
 * How many stations are on the line?
 */

// console.log("There are " + stationCount + " stations.");

// stationCount = stations.length;

// console.log("There are " +  stationCount + " stations.");



/**
 * Q4.
 * Which station is the third stop?
 */



thirdStation = stations.at(2)  
                                              

console.log("The third station is " + thirdStation);



/**
 * Q5.
 * Someone put the wrong Berwick on the timetable! Update "North Berwick" to "Berwick-upon-Tweed".
 */

// console.log(stations);

stations[2] = "Berwick-upon-Tweed";
console.log(stations);



/**
 * Q6.
 * How did Leeds get on there? Better remove it.
 */

// console.log(stations);



/**
 * Q7.
 * We forgot about Darlington! Add it to the route between Newcastle and York.
 */

// console.log(stations);



/**
 * Q8.
 * Is Durham one of the stops?
 */

// stoppingAtDurham = null;

// console.log(stoppingAtDurham);


/**
 * Q9.
 * If we are stopping at Durham, print "Yay Durham!" to the terminal. If not print "Aww...".
 */