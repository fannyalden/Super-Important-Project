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

	//Products in store 
	this.jTelefon = 170000;
	this.jPlatta = 41500;
	this.Paronklocka = 90000; 

	//Capacity for each product
	this.jTelefon_cap = 200000;
	this.jPlatta_cap = 50000;
	this.Paronklocka_cap = 90000;

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