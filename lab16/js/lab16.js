//Ashlyn Einhell, November 1st 2020
// Credit to Wes Mode's lecture slides in Fall 2020 CST 252
//And to Kayla for her help
//and Eddie for sharing his code with me and Kayla

//Creating button with jQuery 
$("#output").append("<button id='my-button'> You can click me for a fun fact!");
$("#my-button").css("background-color", "chartreuse");

//Making event listener 
$("button").click(function() {
	//alert
	alert("Koalas have smooth brains c:");
});
