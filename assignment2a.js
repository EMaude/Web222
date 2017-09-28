/*******************************************************************************

 *                     WEB222 – Assignment 2

 * I declare that this assignment is my own work in accordance with Seneca

 * Academic Policy.  No part of this assignment has been copied manually or

 * electronically from any other source (including web sites) or distributed to

 * other students.

 *

 * Name: Elliot Maude Student ID: 032830127 Date: 25/09/17

 *

 ******************************************************************************/


 /*****************************
  * Step 1
  *****************************/

var e1, e2, e3, e4, e5, e6, e7, str;

/*****************************
 * Step 2
 *****************************/

function capFirstLetter(str)
{
  var first = str.substr(0,1);
  var str = str.substr(1, str.length);
  first = first.toUpperCase();
  str = str.toLowerCase();
  return first + str;
}

e1 = prompt("Enter you name: ", "elLiot");
e1 = capFirstLetter(e1);
//console.log(e1);

/*****************************
 * Step 3
 *****************************/

var getAge = function(year)
{
  var current = (new Date()).getFullYear();
  return current - parseInt(year);
}

e2 = prompt("Enter your birth year: ", "1994");
e2 = getAge(e2);
//console.log(e2);

/*****************************
 * Step 4
 *****************************/

e3 = prompt("Enter your college name", "seneca college");

e3 = e3.split(" ");
capFirstLetter(e3[0]);
capFirstLetter(e3[1]);

e3 = e3[0] + " " + e3[1];

/*****************************
 * Step 5
 *****************************/

e4 = prompt("Enter your 5 favorite sports (lower case, Comma seperated)", "hockey,football,basketball,tennis,golf");

var patt = /football/;
e4 = e4.replace(patt, "soccer");

e4 = e4.split(',');

e5 = prompt("Enter another favorite sport", "formula 1");
e4.push(e5);

//console.log(e4);

/*****************************
 * Step 6
 *****************************/

for ( e in e4 )
{
  e4[e] = capFirstLetter(e4[e]);
}
e4.sort();

/*****************************
 * Step 7
 *****************************/
function getDateString(date)
{
  var dateStr;
 
  dateStr = date.getFullYear();
  dateStr += "-":
  var n = date.getMonth();
  dateStr += (n > 9) ? "" + n: "0" + n;
  dateStr += "-":
  n = date.getDay();
  dateStr += (n > 9) ? "" + n: "0" + n;
  return dateStr
}

e6 = new Date();
e7 = getDateString(e6);

/*****************************
 * Step 8
 *****************************/

str = "User Info: \n\n name (e1): " + e1 + "\n age (e2): " + e2 + "\n school (e3): " + e3 + "\n favorite sports (e4): \n";

for (e in e4)
{
  str += "\t" + e4[e] + "\n";
}

str += "current date (e7): " + e7;

console.log(str);
