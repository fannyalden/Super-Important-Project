/************************************************************
    Donut charts for every warehouse
*************************************************************/

var Cupertino = new Cupertino();
var Norrkoping = new Norrkoping();
var Frankfurt = new Frankfurt();
var Price = new Price();

/* ------------------
      CUPERTINO
-------------------*/
new Chart(document.getElementById("doughnut-chart"), {
    type: 'doughnut',
    data: {
	//labels: ['jTelefon', 'jPlatta', 'Paronklocka'],
      datasets: [
        {
          label: "jTelefon",
          backgroundColor: ["rgba(255, 217, 27, 0.6)", '#ffffff'], 
          //borderColor: '#ffffff',
          borderWidth: 5,
          data: [Cupertino.jTelefon, (Cupertino.jTelefon_cap-Cupertino.jTelefon)]
        }, 
        {
          label: "jPlatta",
          backgroundColor: ["rgba(39, 39, 39, 0.8)", '#ffffff'],
         // borderColor: "rgba(54, 162, 235, 1)",
          borderWidth: 5,
          data: [Cupertino.jPlatta, (Cupertino.jPlatta_cap-Cupertino.jPlatta)]
        },
        {
          label: "Paronklocka",
          backgroundColor: ["rgba(0, 192, 105, 0.6)", '#ffffff'], 
          //borderColor: "rgba(0, 192, 105, 1)",
          borderWidth: 5,
          data: [Cupertino.Paronklocka, (Cupertino.Paronklocka_cap-Cupertino.Paronklocka)]
        }
      ]
    },
    options: {
      title: {
	        display: false,
	        text: 'Lagersaldo i Cupertino'
      	},
    }
});

/* ------------------
      NORRK�PING
-------------------*/
new Chart(document.getElementById("doughnut-chart"), {
    type: 'doughnut',
    data: {
  //labels: ['jTelefon', 'jPlatta', 'Paronklocka'],
      datasets: [
        {
          label: "jTelefon",
          backgroundColor: ["rgba(255, 217, 27, 0.6)", '#ffffff'], 
          //borderColor: '#ffffff',
          borderWidth: 5,
          data: [Norrkoping.jTelefon, (Norrkoping.jTelefon_cap-Norrkoping.jTelefon)]
        }, 
        {
          label: "jPlatta",
          backgroundColor: ["rgba(39, 39, 39, 0.8)", '#ffffff'],
         // borderColor: "rgba(54, 162, 235, 1)",
          borderWidth: 5,
          data: [Norrkoping.jPlatta, (Norrkoping.jPlatta_cap-Norrkoping.jPlatta)]
        },
        {
          label: "Paronklocka",
          backgroundColor: ["rgba(0, 192, 105, 0.6)", '#ffffff'], 
          //borderColor: "rgba(0, 192, 105, 1)",
          borderWidth: 5,
          data: [Norrkoping.Paronklocka, (Norrkoping.Paronklocka_cap-Norrkoping.Paronklocka)]
        }
      ]
    },
    options: {
      title: {
          display: false,
          text: 'Lagersaldo i Norrk�ping'
        },
    }
});

/* ------------------
      FRANKFURT
-------------------*/
new Chart(document.getElementById("doughnut-chart"), {
    type: 'doughnut',
    data: {
  //labels: ['jTelefon', 'jPlatta', 'Paronklocka'],
      datasets: [
        {
          label: "jTelefon",
          backgroundColor: ["rgba(255, 217, 27, 0.6)", '#ffffff'], 
          //borderColor: '#ffffff',
          borderWidth: 5,
          data: [Frankfurt.jTelefon, (Frankfurt.jTelefon_cap-Frankfurt.jTelefon)]
        }, 
        {
          label: "jPlatta",
          backgroundColor: ["rgba(39, 39, 39, 0.8)", '#ffffff'],
         // borderColor: "rgba(54, 162, 235, 1)",
          borderWidth: 5,
          data: [Frankfurt.jPlatta, (Frankfurt.jPlatta_cap-Frankfurt.jPlatta)]
        },
        {
          label: "Paronklocka",
          backgroundColor: ["rgba(0, 192, 105, 0.6)", '#ffffff'], 
          //borderColor: "rgba(0, 192, 105, 1)",
          borderWidth: 5,
          data: [Frankfurt.Paronklocka, (Frankfurt.Paronklocka_cap-Frankfurt.Paronklocka)]
        }
      ]
    },
    options: {
      title: {
          display: false,
          text: 'Lagersaldo i Frankfurt'
        },
    }
});

/************************************************************
    Format how numbers are displayed
*************************************************************/
//Display numbers with commas 
function numberWithCommas(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}


/************************************************************
    Display information about each warehouse on their pages
*************************************************************/

//Display information about the warehouse in Cupertino
function displayCupertino () {  
    document.getElementById("CupertinoInfo").innerHTML = 
    "Antal jTelefoner: " + numberWithCommas(Cupertino.jTelefon)
    + "<br>" + "Antal jPlattor: " + numberWithCommas(Cupertino.jPlatta)
    + "<br>" + "Antal P�ronklockor: " + numberWithCommas(Cupertino.Paronklocka)
    + "<br>" + "Totalt v�rde: " + numberWithCommas(Cupertino.total_value)
    // + "<br>" + "Totalt antar produkter i lagret: " + numberWithCommas(Cupertino.total_products)
    + "<br>" + "Lagernummer: " + Cupertino.lagerID;

    document.getElementById("CupertinoInfoValue").innerHTML =  
    "Totalt v�rde jTelefoner: " + numberWithCommas(Cupertino.jTelefon * Price.jTelefon)
    + "<br>" + "Totalt v�rde jPlattor: " + numberWithCommas(Cupertino.jPlatta * Price.jPlatta)
    + "<br>" + "Totalt v�rde P�ronklockor: " + numberWithCommas(Cupertino.Paronklocka * Price.Paronklocka)
    + "<br>" + "Totalt v�rde i lagret: " + numberWithCommas(Cupertino.total_value);
}

//Display information about the warehouse in Norrk�ping
function displayNorrkoping () {  
    document.getElementById("NorrkopingInfo").innerHTML =  
    "Antal jTelefoner: " + numberWithCommas(Norrkoping.jTelefon) 
    + "<br>" + "Antal jPlattor: " + numberWithCommas(Norrkoping.jPlatta)
    + "<br>" + "Antal P�ronklockor: " + numberWithCommas(Norrkoping.Paronklocka)
    // + "<br>" + "Totalt antar produkter i lagret: " + numberWithCommas(Norrkoping.total_products)
    + "<br>" + "Lagernummer: " + Norrkoping.lagerID; 

    document.getElementById("NorrkopingInfoValue").innerHTML =  
    "Totalt v�rde jTelefoner: " + numberWithCommas(Norrkoping.jTelefon * Price.jTelefon)
    + "<br>" + "Totalt v�rde jPlattor: " + numberWithCommas(Norrkoping.jPlatta * Price.jPlatta)
    + "<br>" + "Totalt v�rde P�ronklockor: " + numberWithCommas(Norrkoping.Paronklocka * Price.Paronklocka)
    + "<br>" + "Totalt v�rde i lagret: " + numberWithCommas(Norrkoping.total_value);
}

//Display information about the warehouse in Frankfurt
function displayFrankfurt (){  
    document.getElementById("FrankfurtInfo").innerHTML = 
    "Antal jTelefoner: " + numberWithCommas(Frankfurt.jTelefon)
    + "<br>" + "Antal jPlattor: " + numberWithCommas(Frankfurt.jPlatta)
    + "<br>" + "Antal P�ronklockor: " + numberWithCommas(Frankfurt.Paronklocka)
    + "<br>" + "Totalt v�rde: " + numberWithCommas(Frankfurt.total_value)
    // + "<br>" + "Totalt antar produkter i lagret: " + numberWithCommas(Frankfurt.total_products)
    + "<br>" + "Lagernummer: " + Frankfurt.lagerID;

    document.getElementById("FrankfurtInfoValue").innerHTML =  
    "Totalt v�rde jTelefoner: " + numberWithCommas(Frankfurt.jTelefon * Price.jTelefon)
    + "<br>" + "Totalt v�rde jPlattor: " + numberWithCommas(Frankfurt.jPlatta * Price.jPlatta)
    + "<br>" + "Totalt v�rde P�ronklockor: " + numberWithCommas(Frankfurt.Paronklocka * Price.Paronklocka)
    + "<br>" + "Totalt v�rde i lagret: " + numberWithCommas(Frankfurt.total_value);
}


    
     