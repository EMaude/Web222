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
var gradYear = year + parseInt(collegeLength);
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

function largerNum(a, b)
{
	return (a > b)? a : b;
}

var greaterNum = function(a,b) {return (a > b)? a : b};


var a1 = 5;
var b1 = 12;
var a2 = 32;
var b2 = 15;

console.log("The larger number of " + a1 + " and " + b1 + " is " + largerNum(a1, b1));
console.log("The larger number of " + a2 + " and " + b2 + " is " + largerNum(a2, b2));

console.log("The larger number of " + a1 + " and " + b1 + " is " + greaterNum(a1, b1));
console.log("The larger number of " + a2 + " and " + b2 + " is " + greaterNum(a2, b2));

/*****************************
* Task 6
*****************************/


var evaluator = function()
{
	var sum = 0;
	for(var i = 1; i < arguments.length; i++)
	{
		sum += arguments[i];
	}
	var average = sum/arguments.length;
	return ( average > 50)? true : false;
}

var g1 = 45, g2 = 87, g3 = 56, g4 = 23;
var result = (evaluator(g1, g2, g3, g4))? "pass." : "fail.";
console.log("The result of grades " + g1 + " " + g2 + " " + g3 + " " + g4 + " is a " + result);

var g1 = 65, g2 = 87, g3 = 66, g4 = 65, g5 = 78, g6 = 89;
result = (evaluator(g1, g2, g3, g4, g5, g6))? "pass." : "fail.";
console.log("The result of grades " + g1 + " " + g2 + " " + g3 + " " + g4 + " " + g5 + " " + g6 + " is a " + result);

var g1 = 34, g2 = 54, g3 = 23;
result = (evaluator(g1, g2, g3))? "pass." : "fail.";
console.log("The result of grades " + g1 + " " + g2 + " " + g3 + " is a " + result);

/*****************************
* Task 7
*****************************/

var grader = function(score)
{ 
	var result;
	if(score >= 90)
	{
		result = "A";
	}
	else if(score >= 80 && score < 90)
	{
		result = "B";
	}
	else if(score >= 70 && score < 80)
	{
		result = "C";
	}
	else if(score >= 60 && score < 70)
	{
		result = "D";
	}
	else
	{
		result = "F";
	}
	return result;
}

var grade = 79;
console.log("A grade of " + grade + " is a " + grader(grade));
grade = 46;
console.log("A grade of " + grade + " is a " + grader(grade));
grade = 84;
console.log("A grade of " + grade + " is a " + grader(grade));

/*****************************
* Task 8
*****************************/

function showMultiples(num, numMultiples)
{
	for(i = num; i <= numMultiples; i++)
	{
		console.log(num + " x " + i + " = " + (num * i));
	}
}

showMultiples(2, 10);