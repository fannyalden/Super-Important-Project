/************************************************************
    NORRKOPING PAGE
*************************************************************/

var Norrkoping = new Norrkoping();
var Price = new Price();

/* ------------------
  doughnut-chart
-------------------*/
var chart_N = new Chart(document.getElementById("chart_N"), {
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
          text: 'Lagersaldo i Norrköping'
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

//Display information about the warehouse in Norrköping
function displayNorrkoping () {  
    document.getElementById("NorrkopingInfo").innerHTML =  
    "Antal jTelefoner: " + numberWithCommas(Norrkoping.jTelefon) 
    + "<br>" + "Antal jPlattor: " + numberWithCommas(Norrkoping.jPlatta)
    + "<br>" + "Antal Päronklockor: " + numberWithCommas(Norrkoping.Paronklocka)
    // + "<br>" + "Totalt antar produkter i lagret: " + numberWithCommas(Norrkoping.total_products)
    + "<br>" + "Lagernummer: " + Norrkoping.lagerID; 

    document.getElementById("NorrkopingInfoValue").innerHTML =  
    "Totalt värde jTelefoner: " + numberWithCommas(Norrkoping.jTelefon * Price.jTelefon)
    + "<br>" + "Totalt värde jPlattor: " + numberWithCommas(Norrkoping.jPlatta * Price.jPlatta)
    + "<br>" + "Totalt värde Päronklockor: " + numberWithCommas(Norrkoping.Paronklocka * Price.Paronklocka)
    + "<br>" + "Totalt värde i lagret: " + numberWithCommas(Norrkoping.total_value);
}

    
     