/**
 * In these tasks you will need to manipulate the array below in order to answer the questions. Some answers will require you to store the result in a variable, others will need you to inspect the whole array.
 */

 stations = ["Dundee", "Edinburgh", "North Berwick", "Newcastle", "York", "Leeds", "Doncaster", "Peterborough"];


// console.log(stations);

/**
 * Q1.
 * The East Coast Main Line doesn't stop at Peterborough! Add London Kings Cross to the end of the array to complete the line.
 */

// COMPLETE

// stations.push("London Kings Cross");

// console.log(stations);


/**
 * Q2.
 * It doesn't go as far as Dundee either, so remove it from the start of the array.
 */


// COMPLETE

// stations.shift();

// console.log(stations);

// Alternative

// delete stations[0];

// console.log(stations);
/**
 * Q3.
 * How many stations are on the line?
 */


// COMPLETE 

// stationCount = stations.length;

// console.log("There are " +  stationCount + " stations.");



/**
 * Q4.
 * Which station is the third stop?
 */

// COMPLETE

// thirdStation = stations.at(2)  
                                              

// console.log("The third station is " + thirdStation);



/**
 * Q5.
 * Someone put the wrong Berwick on the timetable! Update "North Berwick" to "Berwick-upon-Tweed".
 */

// COMPLETE

// stations[2] = "Berwick-upon-Tweed";
// console.log(stations);


/**
 * Q6.
 * How did Leeds get on there? Better remove it.
 */


// COMPLETE

// const leedsIndex = stations.indexOf('Leeds')

// stations.splice(leedsIndex, 1);

// console.log(stations);


/**
 * Q7.
 * We forgot about Darlington! Add it to the route between Newcastle and York.
 */

// COMPLETE

// stations.splice(4,0,'Darlington')
// console.log(stations);

/**
 * Q8.
 * Is Durham one of the stops?
 
*/ 

// COMPLETE

// console.log(stations.includes("Dhuram"));



/**
 * Q9.
 * If we are stopping at Durham, print "Yay Durham!" to the terminal. If not print "Aww...".
 */

// COMPLETE

 if (stations.includes("Dundee")){
   console.log("Yay Dundee!");
 } else {
    console.log("Aww.");
}