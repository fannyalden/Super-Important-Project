/************************************************************
    Authors:  Fanny Aldén Hanna Johansson
    Date: 2017-11-01
*************************************************************/

//Constructor for prices
function Price() {
	this.jTelefon = 8900;
	this.jPlatta = 5700;
	this.Paronklocka = 11000;
}


//Constructor for the warehouse in Cupertino 
function Cupertino() {

	this.Price = new Price();
	
	//Warehouse ID
	this.lagerID = 1;

	//Products in store: jTelefon
	if(sessionStorage.getItem("Cupertino.jTelefon") == null) {
		sessionStorage.setItem("C.jTelefon", 170000);
		this.jTelefon = parseInt(sessionStorage.getItem("C.jTelefon"),10);
	}
	else 
		this.jTelefon = parseInt(sessionStorage.getItem("Cupertino.jTelefon"));

	//Products in store: jPlatta
	if(sessionStorage.getItem("Cupertino.jPlatta") == null) {
		sessionStorage.setItem("C.jPlatta", 41500);
		this.jPlatta = parseInt(sessionStorage.getItem("C.jPlatta"),10);
	}
	else 
		this.jPlatta = parseInt(sessionStorage.getItem("Cupertino.jPlatta"));
	
	//Products in store: Päronklocka
	if(sessionStorage.getItem("Cupertino.Paronklocka") == null) {
		sessionStorage.setItem("C.Paronklocka", 90000);
		this.Paronklocka = parseInt(sessionStorage.getItem("C.Paronklocka"),10);
	}
	else 
		this.Paronklocka = parseInt(sessionStorage.getItem("Cupertino.Paronklocka"));

	console.log("jTelefoner i Cupertino = " + this.jTelefon);
	console.log("jPlattor i Cupertino = " + this.jPlatta);
	console.log("Päronklockor i Cupertino = " + this.Paronklocka);

	//Capacity for each product
	this.jTelefon_cap = 200000;
	this.jPlatta_cap = 50000;
	this.Paronklocka_cap = 100000;

	//Total number of products
	this.total_products = this.jTelefon + this.jPlatta + this.Paronklocka;

	//Total capacity of the warehouse
	this.total_capacity = this.jTelefon_cap + this.jPlatta_cap + this.Paronklocka_cap;

	//Total price 
	this.total_value = this.Price.jTelefon * this.jTelefon 
					 + this.Price.jPlatta * this.jPlatta 
					 + this.Price.Paronklocka * this.Paronklocka;
};

//Constructor for the warehouse in Norrkoping
function Norrkoping() {
	this.Price = new Price();
	
	//Warehouse ID
	this.lagerID = 2;

	//Products in store 
	this.jTelefon = 55000;
	this.jPlatta = 104300;
	this.Paronklocka = 38000; 

	//Capacity for each product
	this.jTelefon_cap = 100000;
	this.jPlatta_cap = 110000;
	this.Paronklocka_cap = 50000;

	//Total number of products
	this.total_products = this.jTelefon + this.jPlatta + this.Paronklocka;

	//Total capacity of the warehouse
	this.total_capacity = this.jTelefon_cap + this.jPlatta_cap + this.Paronklocka_cap;

	//Total price 
	this.total_value = this.Price.jTelefon * this.jTelefon 
						+ this.Price.jPlatta * this.jPlatta 
						+ this.Price.Paronklocka * this.Paronklocka;
};

//Constructor for the warehouse in Frankfurt
function Frankfurt() {
	
	this.Price = new Price();

	//Warehouse ID
	this.lagerID = 3;

	//Products in store 
	this.jTelefon = 101700;
	this.jPlatta = 72400;
	this.Paronklocka = 25000; 

	//Capacity for each product
	this.jTelefon_cap = 110000;
	this.jPlatta_cap = 90000;
	this.Paronklocka_cap = 50000;

	//Total number of products
	this.total_products = this.jTelefon + this.jPlatta + this.Paronklocka;

	//Total capacity of the warehouse
	this.total_capacity = this.jTelefon_cap + this.jPlatta_cap + this.Paronklocka_cap;

	//Total price 
	this.total_value = this.Price.jTelefon * this.jTelefon 
						+ this.Price.jPlatta * this.jPlatta 
						+ this.Price.Paronklocka * this.Paronklocka;
};

