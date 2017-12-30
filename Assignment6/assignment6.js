function formValidation()
{
	var name = fNameValid(document.getElementById("FName").value);
	var lname = lNameValid(document.getElementById("LName").value);
	var pass = passValid(document.getElementById("password").value);
	var passRT = passMatch(document.getElementById("RtPassword").value);
	var phone = phoneValid(document.getElementById("PNum").value);
	var edStat = edStatusValid();
	var valid = false;

	if( name && lname && pass && passRT && phone && edStat)
	{
		valid = true;
	}
	
	return valid;
}

function fNameValid(fname)
{
	clearError("FNameErr");
	fname = fname.trim();
	var err = document.getElementById("FNameErr");
	var valid = false;
	var allowString = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'-0";
	var foundInvalid = false;

	if(fname.length > 0)
	{
		for(var i = 0; i < fname.length; i++)
		{
			for(var x = 0; x < allowString.length; x++)
			{
				if(allowString.indexOf(fname[i]) == -1)
				{
					err.innerHTML = "<p>*Name not valid: Invalid Character</p>"
					document.signup.FName.focus();
					foundInvalid = true;
				}
			}
		}
		if(!foundInvalid)
		{
			valid = true;
		}
	}
	else
	{
		err.innerHTML = "<p>*Name not valid: Cannot be blank</p>"
		document.signup.FName.focus();
		valid = false;
	}

	return valid;
}

function lNameValid(lname)
{
	clearError("LNameErr");
	//lname = lname.trim();
	var err = document.getElementById("LNameErr");
	var valid = false;
	var allowString = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'-0";
	var hasFailed = false;

	if(lname.length > 0)
	{
		for(var i = 0; i < lname.length; i++)
		{
			for(var x = 0; x < allowString.length; x++)
			{ 
				if(allowString.indexOf(lname[i]) == -1)
				{
					err.innerHTML = "<p>*Name not valid: Invalid Character</p>"
					document.signup.LName.focus();
					hasFailed = true;
				}
			}
		}
		if(!hasFailed)
		{
			valid = true;
		}
	}
	else
	{
		err.innerHTML = "<p>*Name not valid: Cannot be blank</p>"
		document.signup.LName.focus();
		valid = false;
	}

	return valid;
}

function passValid(pass)
{
	clearError("PassErr");
	var err = document.getElementById("PassErr");

	if(pass.length < 8)
	{
		err.innerHTML = "<p> Password must be at least 8 characters</p>";
		document.signup.password.focus;
		return false;
	}

	var lowerCase = false;
	var upperCase = false;
	var number = false;

	for(var i = 0; i < pass.length; i++)
	{
		if(pass[i] > 'a' && pass[i] < 'z')
		{
			lowerCase = true;
		}
		if(pass[i] > 'A' && pass[i] < 'Z')
		{
			upperCase = true;
		}
		if(pass[i] >= 0 && pass[i] <= 9)
		{
			number = true;
		}
	}

	if(!lowerCase)
	{
		err.innerHTML = "<p>Must Contain 1 lowercase Character</p>";
		document.signup.password.focus;
		return false;
	}
	else if(!upperCase)
	{
		err.innerHTML = "<p>Must Contain 1 uppercase Character</p>";
		document.signup.password.focus;
		return false;
	}
	else if(!number)
	{
		err.innerHTML = "<p>Must Contain 1 number</p>";
		document.signup.password.focus;
		return false;
	}
	else
	{
		return true;
	}
}

function passMatch(passRT)
{
	clearError("PassMatchErr");
	var err = document.getElementById("PassMatchErr");
	var compTo = document.getElementById("password").value;

	if(compTo != passRT)
	{
		err.innerHTML = "<p>*Passwords Must Match</p>";
		return false;
	}
	else
	{
		return true;
	}
}

function phoneValid(number)
{
	clearError("PhoneErr");
	var err = document.getElementById("PhoneErr");
	var valid = false;

	//remove any - from the number
	if(number.indexOf("-") != -1)
	{
		numberArr = number.split("-");
		var number2 = " ";
		for(var i = 0; i < numberArr.length; i++)
		{
			number2 += numberArr[i];
		}
		number = number2;
	}

	//check if phone number is valid
	if (parseInt(number, 10) != number) 
	{
		err.innerHTML = "<p>*Phone Number Not Valid: Only Numbers Allowed </p>";
		document.signup.PNum.focus();
		valid = false
	}
	else
	{
		if(number > 9999999999 || number < 1000000000)
		{
			err.innerHTML = "<p>*Phone Number Not Valid</p>";
			document.signup.PNum.focus();
			valid = false;
		}
		else
		{
			valid = true;
		}
	}

	return valid;
}

function edStatusValid()
{
	clearError("EdStatusErr");
	var length = document.signup.EdStatus.length;
	var checked = false;

	for(var i = 0; i < length; i++)
	{
		if(document.signup.EdStatus[i].checked == true)
		{
			checked = true;
		}
	}

	if(!checked)
	{
		document.getElementById("EdStatusErr").innerHTML += "<p>*Must Select a Option</p>";
	}
	return checked;
}


function clearError(name) {
	var err = document.getElementById(name).innerHTML = " ";   
}  