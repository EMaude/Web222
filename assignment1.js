/*******************************************************************************

 *                     WEB222 – Assignment 1

 * I declare that this assignment is my own work in accordance with Seneca

 * Academic Policy.  No part of this assignment has been copied manually or

 * electronically from any other source (including web sites) or distributed to

 * other students.

 *

 * Name: Elliot Maude Student ID: 032830127 Date: September 9th, 2017

 *

 ******************************************************************************/

 /*****************************
 * Task 1
 *****************************/

 var studentName = "Elliot Maude";
 var numberOfCourses = 4;
 var program = "CPA";
 var partTimeJob = true;

 var output = "My name is " + studentName + " and I'm in " + program + " program. I'm taking " + numberOfCourses + " course in this semester";

console.log(output + ".");

var job = (partTimeJob)? "have": "don't have";

var output = output + " and I " + job + " a part-time job now"; 

console.log(output + ".");

/*****************************
* Task 2
*****************************/
var year = 2017;

var age = prompt("Please enter your age:");
var birthYear = year - age;
console.log("I was born in the year " + birthYear);

var collegeLength = prompt("Enter the number of year you expect to study in the college:");
var gradYear = year + Number(collegeLength);
console.log("You will graduate from Seneca college in the year " + gradYear);

/*****************************
* Task 3
*****************************/

var celsius = Number(prompt("Enter celsius temperature"));
var converted = celsius * 9 / 5 + 32;
console.log(celsius + " C is " + converted +" in F");

var fahrenheit = Number(prompt("Enter fahrenheit temperature"));
var converted = (fahrenheit - 32) * 5 / 9;
console.log(fahrenheit + " F is " + converted + " in C");

/*****************************
* Task 4
*****************************/

for (var i = 0; i <= 10; i++)
{
	var type = (i % 2 === 0)? "even": "odd";
	console.log(i + " is " + type);
}

/*****************************
* Task 5
*****************************/