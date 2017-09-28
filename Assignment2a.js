
/*****************************
 * Step 1
 *****************************/

var e1, e2, e3, e4, e5, e6, e7, str;

/*****************************
 * Step 2
 *****************************/

function capFirstLetter(str)
{
	if(typeof(str) === "string")
		{
			var first = str.substr(0, 1);
			var rest = str.substring(1, str.length);
			first = first.toUpperCase();
			rest = rest.toLowerCase();
			
			return first + rest;
		}
}

e1 = prompt("Enter First Name", "elliot");
e1 = capFirstLetter(e1);

/*****************************
 * Step 3
 *****************************/

var getAge = function(birthYear)
{
	var today = new Date(); 
	return today.getFullYear() - birthYear;
};

e2 = prompt("Enter Your Birth Year", "1994");

e2 = getAge(e2);

/*****************************
 * Step 4
 *****************************/

e3 = prompt("Enter College Name");

e3 = e3.split(" ");

for(var i in e3){
	e3.push(capFirstLetter(i));
}

console.log(e3);

