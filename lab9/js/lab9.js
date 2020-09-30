// Ashlyn Einhell
// September 30th 2020
// Credit to: Wes Modes for slideshow as primary reference 

//Task 2: Element ID Output

var outputEl = document.getElementById("output");
var new1El = document.createElement("p");
new1El.innerHTML = "What up I'm Jared, I'm nineteen and I never fucking learned how to read";
outputEl.appendChild(new1El);


function main() {
	outputElement = document.getElementById("output2");
	outputElement.innerHTMl ="SKELETON SETEPMBER <br><br>";

	var new2El = document.createElement("img");
	new2El.src = "images/skeleman.jpg";
	var src =  document.getElementById("output2");
	src.appendChild(new2El);
}

//CSS Stylings
document.getElementById("output2").style.boxShadow=" 10px 20px 30px darkorange"
document.getElementById("output").style.color="darkmagenta"