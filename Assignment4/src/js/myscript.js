// All you JavaScript code for assignment 4 should be in this file

var lang; // #  todo 3 (Multi Language Handeling) +2: 

window.onload = function()
{ 
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
	countryList();
	let m1 = document.querySelector("#menu_1");
	m1.onclick = function () { countryList(); }

	// #  todo 4 (By pop > 100,000,000) +0: 

	// #  todo 5 (by pop 1 ~ 2 Million) +0: 

	// #  todo 6 (by area Americas) +0:

	// #  todo 7 (by area Asia) +0: 
}


function countryList()
{
	if(lang == undefined)
	{
		lang = "English";
	}

	document.querySelector("#subtitle").innerHTML = "List of Countries and Dependencies - Country / Dep. Name in " + lang;

	let tbl = document.querySelector("#outputTable");

	var tblExistingBody = tbl.querySelector("tbody");
   	if (tblExistingBody) tbl.removeChild(tblExistingBody);

	let tableBody = document.createElement("tbody");


	for (let i = 0; i < countries.length; i++) {
		let row = document.createElement("tr");

		row.appendChild(getTdImage(countries[i].Code));
		row.appendChild(getTdElement(countries[i].Code));
		row.appendChild(getTdElement(countries[i].Name[lang]))
		row.appendChild(getTdElement(countries[i].Continent));
		row.appendChild(getTdElement(countries[i].AreaInKm2));
		row.appendChild(getTdElement(countries[i].Population));
		row.appendChild(getTdElement(countries[i].Capital));

		tableBody.appendChild(row);
	}

	tbl.appendChild(tableBody);
}

function getTdElement(text)
{	
	var cell = document.createElement("td");
	var cellText = document.createTextNode(text);
	cell.appendChild(cellText);
	return cell;
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