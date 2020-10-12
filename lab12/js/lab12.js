//Ashlyn Einhell Oct 8th 2020
//Credit to Wes Modes, for creating lecture slides that I referenced 

//function fizzBuzz(str) {

  for (i=1; i<=200; i++) {
	outputEl = document.getElementById("output");
	newEl = document.createElement("p");
	
	if(i%105 == 0) {
		newEl.innerHTML = i + "- FizzBuzzBoom";
		outputEl.appendChild(newEl);
		console.log("FizzBuzzBoom");
	} else if (i%35 == 0) {
		newEl.innerHTML = i + "- BuzzBoom";
		outputEl.appendChild(newEl);
		console.log("BuzzBoom");
	} else if (i%21 == 0) {
		newEl.innerHTML = i + " - FizzBoom";
		outputEl.appendChild(newEl);
		console.log("FizzBoom");
	} else if (i%15 == 0) {
		newEl.innerHTML = i + "- FizzBuzz";
		outputEl.appendChild(newEl);
		console.log("FizzBuzz");
	} else if (i%3 == 0) {
		newEl.innerHTML = i + "- Fizz";
		outputEl.appendChild(newEl);
		console.log("Fizz");
	} else if (i%5 == 0){
		newEl.innerHTML = i + "- Buzz";
		outputEl.appendChild(newEl);
		console.log("Buzz");
	} else if (i%7 == 0) {
	  newEl.innerHTML = i + "- Boom";
	  outputEl.appendChild(newEl);
	  console.log("Boom");
	} else {
		newEl.innerHTML = i;
		outputEl.appendChild(newEl);
		console.log(i);
	}  

}
//}