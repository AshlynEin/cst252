// Ashlyn Einhell
//Credit to : Wes Modes for presentation as reference and Kayla Lee for assisting with her code in class
//October 23rd 2020

//Creating object and constructor


class Bike {
	constructor(make, model, year, color) {
		this.bikename = make;
		this.bikemodel = model;
		this.bikeyear = year;
		this.bikecolor = color;
	}
	//Return 
	info() {
		return "I want a " + this.bikecolor +" "+ this.bikeyear +" "+ this.bikename +" "+ this.bikemodel;

	}
}
mybike = new Bike("Schwinn","Perla","2020","pink");
console.log(mybike.info());

document.getElementById("output").innerText +=  mybike.info();
//disclaimer : i have a bike but its so old i dont know what it is also i am afriad of driving dont come for me for not putting a car.