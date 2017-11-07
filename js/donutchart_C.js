/************************************************************
    CUPERTINO PAGE
*************************************************************/

var Cupertino = new Cupertino();
var Price = new Price();

/* ------------------
    Doughnut-chart
-------------------*/
var chart_C = new Chart(document.getElementById("chart_C"), {
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
    Display information about the warehouse
*************************************************************/

//Display information about the warehouse in Cupertino
function displayCupertino () {  
    document.getElementById("CupertinoInfo").innerHTML = 
    "Antal jTelefoner: " + numberWithCommas(Cupertino.jTelefon)
    + "<br>" + "Antal jPlattor: " + numberWithCommas(Cupertino.jPlatta)
    + "<br>" + "Antal Päronklockor: " + numberWithCommas(Cupertino.Paronklocka)
    + "<br>" + "Totalt värde: " + numberWithCommas(Cupertino.total_value)
    // + "<br>" + "Totalt antar produkter i lagret: " + numberWithCommas(Cupertino.total_products)
    + "<br>" + "Lagernummer: " + Cupertino.lagerID;

    document.getElementById("CupertinoInfoValue").innerHTML =  
    "Totalt värde jTelefoner: " + numberWithCommas(Cupertino.jTelefon * Price.jTelefon)
    + "<br>" + "Totalt värde jPlattor: " + numberWithCommas(Cupertino.jPlatta * Price.jPlatta)
    + "<br>" + "Totalt värde Päronklockor: " + numberWithCommas(Cupertino.Paronklocka * Price.Paronklocka)
    + "<br>" + "Totalt värde i lagret: " + numberWithCommas(Cupertino.total_value);
}


    
     