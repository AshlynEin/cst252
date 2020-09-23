//sortUserName - a function that takes user input and sorts the letters
//of their name.

function sortUserName () {
	var userName = window.prompt("Hello, weary traveler. Enter your name to glean your wizard title.");
	console.log("userName =", userName);
	//split string to array 
	var nameArray = userName.split('');
	console.log("nameArray =", nameArray);
	//sort the array
	var nameArraySort = nameArray.sort();
	console.log("nameArraySort =", nameArraySort);
	// join array back to a string
	var nameSorted = nameArraySort.join('');
	console.log("nameSorted =", nameSorted);
	return nameSorted;
}
// output
document.writeln("Take your new title, and fight for glory: ",
	sortUserName(), "</br>");