/************************************************************
    Authors:  Fanny Aldén Hanna Johansson
    Date: 2017-11-02
*************************************************************/

//Check which of the radio buttons is checked for the warehouses
function checkCity() {
var cityC = document.getElementById('check_C');
var cityN = document.getElementById('check_N');
var cityF = document.getElementById('check_F');

	if (cityC.checked) {
	  chosenCity = cityC.value;
	}
	else if (cityN.checked) {
		chosenCity = cityN.value;
	}
	else {
		chosenCity = cityF.value;
	}

	console.log("Chosen city: " + chosenCity);
}

//Check which of the radio buttons is checked for the products
function checkProduct() {
var product_jTel = document.getElementById('check_jTel');
var product_jPlatta = document.getElementById('check_jPlatta');
var product_Paron = document.getElementById('check_Paron');

	if (product_jTel.checked) {
	  chosenProduct = product_jTel.value;
	}
	else if (product_jPlatta.checked) {
		chosenProduct = product_jPlatta.value;
	}
	else {
		chosenProduct = product_Paron.value;
	}

	console.log("Chosen product: " + chosenProduct); 
}

//Check which of the radio buttons is checked for the transaction of products
function checkDelivery() {
var inleverans = document.getElementById('check_in');
var utleverans = document.getElementById('check_ut');

	if (inleverans.checked) {
	  chosenDelivery = inleverans.value;
	}
	else {
		chosenDelivery = utleverans.value;
	}

	console.log("Chosen delivery: " + chosenDelivery);

	document.getElementById("feedback").innerHTML = "<br><br>" + "Du har valt att göra en " + "<b>" + chosenDelivery + "</b>" 
													+ " av produkten  " + "<b>" + chosenProduct + "</b>"  
													+ " för lagret i " + "<b>" + chosenCity + "</b>.";
													
}



