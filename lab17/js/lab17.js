//Ashlyn Einhell November 1st 2020
//Credit to Eddie Aleman for letting us look at his code to reference
//Thank u very much eddie


$(".spoopy1").click(function() {
	$("#lab-summary").toggleClass("spoopy1");
	console.log(" lab summary click")
});

$(".spoopy2").click(function() {
	$('#challenges').toggleClass("spoopy2");
	console.log("challenges click")
});

$(".spoopy3").click(function() {
	$('#lab-summary').removeClass('spoopy1');
	$('#challenges').removeClass('spoopy2');
	console.log('results click');
});