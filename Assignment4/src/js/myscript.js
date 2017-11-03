// All you JavaScript code for assignment 4 should be in this file

var lang;

window.onload = function()
{  
	//All Languages Impelented
	let lang1 = document.querySelector("#menu_41");
	lang1.onclick = function(){ 
		lang = "English"
		loaded();
	};
	let lang2 = document.querySelector("#menu_42");
	lang2.onclick = function(){ 
		lang = "Arabic" 
		loaded();
	};
	let lang3 = document.querySelector("#menu_43");
	lang3.onclick = function(){
		lang = "Chinese"
		loaded();
	};
	let lang4 = document.querySelector("#menu_44");
	lang4.onclick = function(){
		lang = "French"   // Replaced Spelling mistake (Franch) in a4-country-data
		loaded();
	};
	let lang5 = document.querySelector("#menu_45");
	lang5.onclick = function(){
		lang = "Hindi"
		loaded();
	};
	let lang6 = document.querySelector("#menu_46");
	lang6.onclick = function(){
		lang = "Korean"
		loaded();
	};
	let lang7 = document.querySelector("#menu_47");
	lang7.onclick = function(){ 
		lang = "Japanese"
		loaded();
	};
	let lang8 = document.querySelector("#menu_48");
	lang8.onclick = function(){
		lang = "Russian"
		loaded();
	};

	loaded();
}

function loaded()
{
	if(lang == undefined)
	{
		lang = "English";
	}
	countryList();

	let m1 = document.querySelector("#menu_1");
	m1.onclick = function () { countryList(); }
 
	let m2 = document.querySelector("#menu_21"); 
	m2.onclick = function() { ByPop1() };
	 
	let m3 = document.querySelector("#menu_22");
	m3.onclick = function() { ByPop2() };
	 
	let m4 = document.querySelector("#menu_31");
	m4.onclick = function() { ByArea1() };
	
	let m5 = document.querySelector("#menu_32");
	m5.onclick = function() { ByArea2() };
}

//Sortting Data Functions
function countryList()
{
	document.querySelector("#subtitle").innerHTML = "List of Countries and Dependencies - Country / Dep. Name, in " + lang;
	createTable(countries);
}

function ByPop1()
{
	document.querySelector("#subtitle").innerHTML = "List of Countries and Dependencies - Population greater than 100 million, in " + lang;

	let sortted = [];

	for(i = 0; i < countries.length; i++)
	{
		if(countries[i].Population > 100000000)
		{
			sortted.push(countries[i]);
		}
	}

	createTable(sortted);
}

function ByPop2()
{
	document.querySelector("#subtitle").innerHTML = "List of Countries and Dependencies - Population between 1 and 2 million, in " + lang;
	
	let sortted = [];

	for(i = 0; i < countries.length; i++)
	{
		if(countries[i].Population > 1000000 && countries[i].Population < 2000000)
		{
			sortted.push(countries[i]);
		}
	}

	createTable(sortted);
}

function ByArea1()
{
	document.querySelector("#subtitle").innerHTML = "List of Countries and Dependencies - Area greater than 1 million km2, Americas, in " + lang;

	let sortted = [];
	for(i = 0; i < countries.length; i++)
	{

		if(countries[i].AreaInKm2 > 1000000 && countries[i].Continent === "Americas")
		{
			sortted.push(countries[i]);
		}
	}
	createTable(sortted);
}

function ByArea2()
{
	document.querySelector("#subtitle").innerHTML = "List of Countries and Dependencies - All countries in Asia, in " + lang;

	let sortted = [];
	for(i = 0; i < countries.length; i++)
	{
		if(countries[i].Continent === "Asia")
		{
			sortted.push(countries[i]);
		}
	}
	createTable(sortted);
}

//Table Creation Functions

function getTdElement(text)
{	
	var cell = document.createElement("td");
	var cellText = document.createTextNode(text);
	cell.appendChild(cellText);
	return cell;
}


function createTable(l_countries)
{
	let tbl = document.querySelector("#outputTable");

	var tblExistingBody = tbl.querySelector("tbody");
   	if (tblExistingBody) tbl.removeChild(tblExistingBody);

	let tableBody = document.createElement("tbody");


	for (let i = 0; i < l_countries.length; i++) {
		let row = document.createElement("tr");

		row.appendChild(getTdImage(l_countries[i].Code));
		row.appendChild(getTdElement(l_countries[i].Code));
		row.appendChild(getTdElement(l_countries[i].Name[lang]))
		row.appendChild(getTdElement(l_countries[i].Continent));
		row.appendChild(getTdElement(l_countries[i].AreaInKm2));
		row.appendChild(getTdElement(l_countries[i].Population));
		row.appendChild(getTdElement(l_countries[i].Capital));

		tableBody.appendChild(row);
	}

	tbl.appendChild(tableBody);
}


function getTdImage(name)
{
	let cell = document.createElement("td");
	let img = new Image(20, 20);
	img.src = "flags/" + name + ".png";
	img.alt = "";
	cell.appendChild(img);

	return cell;
}