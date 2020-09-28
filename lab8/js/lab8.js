// Lab 8 
/* Ashlyn Einhell
/* September 28th 2020
/* Code Borrowed from : Wes Modes 
*/
//test 1
function thirdThing (test) {
	console.log(test + ":This is the third thing.<br>")
}
function firstThing (test) {
	console.log(test + ":This is the third thing.<br>")

}function secondThing (test) {
	console.log(test + ":This is the third thing.<br>")
}
 firstThing("TEST 1");
secondThing("TEST 1");
 thirdThing("TEST 1");

// test 2 - in order
setTimeout(function() {
	firstThing("TEST 2");
}, 0);
setTimeout(function() {
	secondThing("TEST 2");

}, 0);
setTimeout(function() {
	thirdThing("TEST 2");
}, 0);

//test 3- order is 2,3,1
setTimeout(function() {
	firstThing("TEST 3");
}, 3000);
setTimeout(function() {
	secondThing("TEST 3");
}, 1000);
setTimeout(function() {
	thirdThing("TEST 3");
}, 2000);

//bonus 
function main () {
	outputElement = document.getElementById("output");
	outputElement.innerHTMl = "Mood. <br><br>";

	var img = document.createElement("img");
	img.src = "images/biatchsalem.jpg";
	var src = document.getElementById("output");
	src.appendChild(img);

}