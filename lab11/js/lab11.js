//Author: Ashlyn Einhell
// Created 6 October 
//Credit to Wes Modes Screenshot of Javascript Code and Wes Modes Lab 11 Conditionals code, I editted to change to Warrior Cats.


//Return ThunderClan, WindClan, RiverClan, ShadowClan
//depends on length mod 4



function sortingCat(str) {
	len = str.length;
	mod = len % 4;
	if (mod == 0) {
		return "ThunderClan"
	}
	else if (mod == 1) {
		return "WindClan"
	}
	else if (mod == 2) {
		return "RiverClan"
	}
	else if (mod == 3) {
		return "ShadowClan"
	}
}

var myButton = document.getElementById("button");
myButton.addEventListener("click", function() {
	var name = document.getElementById("input").value;
	var clan = sortingCat(name);
	newText = "<p> It looks like you're a member of " + clan +"</p>";
	document.getElementById("output").innerHTML = newText;
})