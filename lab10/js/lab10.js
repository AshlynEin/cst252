// Ashlyn Einhell 
//October 4th 2020
// Credit to: Wes Modes and their lecture notes, Hannah and Eddie for help, and Kayla's friend Xue Ee for letting us use her code

//create an event handler
var button =  document.getElementById("my-button");
console.log("Button baybee", button);

button.addEventListener("click", function() {
	//buttom is pressed and user is prompted to add their name to the function
	var name = document.getElementById("user-name").value;
	console.log("Name is", name);
	//Changes from greeting to hello and user
	var heading = document.getElementById("heading");
	console.log("heading", heading);
	heading.innerHTML = "Hello," + name;

	//string to array
	var nameArray = name.split('');
	console.log("nameArray", nameArray);

	//sorting
	var nameArraySort = nameArray.sort();
	console.log("nameArraySort=", nameArraySort);

	//back together string
	var nameSorted = nameArraysort.join('');
	console.log("nameSorted=", nameSorted);
	heading.innerHTML = "Hello, " + nameSorted;
})

//debugger for Lab 13
debugger;
