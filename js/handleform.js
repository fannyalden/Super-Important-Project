/************************************************************
    Authors:  Fanny Aldén Hanna Johansson
    Date: 2017-11-02
*************************************************************/

function Calculate () {
	this.chosenCity = "[välj stad]";
	this.chosenProduct = "[välj produkt]";
	this.chosenDelivery = "[välj leverans]";

}

/*
var chosenCity = "[välj stad]";
var chosenProduct = "[välj produkt]";
var chosenDelivery = "[välj leverans]";
*/

//Check which of the radio buttons is checked for the warehouses
function checkCity() {
var cityC = document.getElementById('check_C');
var cityN = document.getElementById('check_N');
var cityF = document.getElementById('check_F');

	if (cityC.checked) {
	  this.chosenCity = cityC.value;
	}
	else if (cityN.checked) {
		this.chosenCity = cityN.value;
	}
	else {
		this.chosenCity = cityF.value;
	}

	console.log("Chosen city: " + this.chosenCity);
	displayFeedback();
}

//Check which of the radio buttons is checked for the products
function checkProduct() {
var product_jTel = document.getElementById('check_jTel');
var product_jPlatta = document.getElementById('check_jPlatta');
var product_Paron = document.getElementById('check_Paron');

	if (product_jTel.checked) {
	  this.chosenProduct = product_jTel.value;
	}
	else if (product_jPlatta.checked) {
		this.chosenProduct = product_jPlatta.value;
	}
	else {
		this.chosenProduct = product_Paron.value;
	}

	console.log("Chosen product: " + this.chosenProduct);
	displayFeedback(); 
}

//Check which of the radio buttons is checked for the transaction of products
function checkDelivery() {
var inleverans = document.getElementById('check_in');
var utleverans = document.getElementById('check_ut');

	if (inleverans.checked) {
	  this.chosenDelivery = inleverans.value;
	}
	else {
		this.chosenDelivery = utleverans.value;
	}

	console.log("Chosen delivery: " + this.chosenDelivery);
	displayFeedback();													
}

//Display feedback to user about which options are chosen with the radio buttons
function displayFeedback() {
	document.getElementById("feedback").innerHTML = "<br><br>" + "Du har valt att göra en " + "<b>" + this.chosenDelivery + "</b>" 
													+ " av produkten  " + "<b>" + this.chosenProduct + "</b>"  
													+ " för lagret i " + "<b>" + this.chosenCity + "</b>.";							
}

//Do the transaction of products
	// *********** Ful funktion som förmodligen kan optimeras *************
function calcFunction() {

	var input = 1000;	//Ska inte vara 1000, ska hämtas från textinput

	console.log("[Lager: " + this.chosenCity + " ]  " + "[Produkt: " + this.chosenProduct + "]  " + "[Leverans: " + this.chosenDelivery + "]");

	//If Cupertino is chosen as city/warehouse
	if(this.chosenCity == "Cupertino"){
		if(this.chosenProduct == "jTelefon"){
			if(this.chosenDelivery == "inleverans") 
				Cupertino.jTelefon = Cupertino.jTelefon + input; 	//inleverans av jTelefon i Cupertino
			else 
				Cupertino.jTelefon = Cupertino.jTelefon - input;	//utleverans av jTelefon i Cupertino
		}
		else if (this.chosenProduct == "jPlatta"){
			if(this.chosenDelivery == "inleverans") 
				Cupertino.jPlatta = Cupertino.jPlatta + input;	//inleverans av jPlatta i Cupertino
			else 
				Cupertino.jPlatta = Cupertino.jPlatta - input;	//utleverans av jPlatta i Cupertino
		}
		else {
			if(this.chosenDelivery == "inleverans") 
				Cupertino.Paronklocka = Cupertino.Paronklocka + input;	//inleverans av Päronklocka i Cupertino
			else 
				Cupertino.Paronklocka = Cupertino.Paronklocka - input;	//utleverans av Päronklocka i Cupertino
		}
		console.log("Leveransen är genomförd för Cupertino.")
	}
	//If Norrköping is chosen as city/warehouse
	else if(this.chosenCity == "Norrköping"){
		if(this.chosenProduct == "jTelefon"){
			if(this.chosenDelivery == "inleverans") 
				Norrkoping.jTelefon = Norrkoping.jTelefon + input; 	//inleverans av jTelefon i Norrköping
			else 
				Norrkoping.jTelefon = Norrkoping.jTelefon - input;	//utleverans av jTelefon i Norrköping
		}
		else if (this.chosenProduct == "jPlatta"){
			if(this.chosenDelivery == "inleverans") 
				Norrkoping.jPlatta = Norrkoping.jPlatta + input;	//inleverans av jPlatta i Norrköping
			else 
				Norrkoping.jPlatta = Norrkoping.jPlatta - input;	//utleverans av jPlatta i Norrköping
		}
		else {
			if(this.chosenDelivery == "inleverans") 
				Norrkoping.Paronklocka = Norrkoping.Paronklocka + input;	//inleverans av Päronklocka i Norrköping
			else 
				Norrkoping.Paronklocka = Norrkoping.Paronklocka - input;	//utleverans av Päronklocka i Norrköping
		}
		console.log("Leveransen är genomförd för Norrköping.")
	}
	//If Frankfurt is chosen as city/warehouse
	else if(this.chosenCity == "Frankfurt"){
		if(this.chosenProduct == "jTelefon"){
			if(this.chosenDelivery == "inleverans") 
				Frankfurt.jTelefon = Frankfurt.jTelefon + input; 	//inleverans av jTelefon i Frankfurt
			else 
				Frankfurt.jTelefon = Frankfurt.jTelefon - input;	//utleverans av jTelefon i Frankfurt
		}
		else if (this.chosenProduct == "jPlatta"){
			if(this.chosenDelivery == "inleverans") 
				Frankfurt.jPlatta = Frankfurt.jPlatta + input;	//inleverans av jPlatta i Frankfurt
			else 
				Frankfurt.jPlatta = Frankfurt.jPlatta - input;	//utleverans av jPlatta i Frankfurt
		}
		else {
			if(this.chosenDelivery == "inleverans") 
				Frankfurt.Paronklocka = Frankfurt.Paronklocka + input;	//inleverans av Päronklocka i Frankfurt
			else 
				Frankfurt.Paronklocka = Frankfurt.Paronklocka - input;	//utleverans av Päronklocka i Frankfurt
		}
		console.log("Leveransen är genomförd för Frankfurt.")
	}
	//Default
	else {
		console.log("Något har blivit fel");
	}

}