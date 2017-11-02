/************************************************************
    Grouped bar chart
*************************************************************/

var Cupertino = new Cupertino();
var Norrkoping = new Norrkoping();
var Frankfurt = new Frankfurt();

new Chart(document.getElementById("doughnut-chart"), {
    type: 'doughnut',
    data: {
	//labels: ['jTelefon', 'jPlatta', 'Paronklocka'],
      datasets: [
        {
          label: "jTelefon",
          backgroundColor: ['#3e95cd', '#ffffff'], //"rgba(255, 99, 132, 0.2)", BLÅ
          //borderColor: '#ffffff',
          borderWidth: 5,
          data: [Frankfurt.jTelefon, (Frankfurt.jTelefon_cap-Frankfurt.jTelefon)]
        }, 
        {
          label: "jPlatta",
          backgroundColor: ['#8e5ea2', '#ffffff'], // rgba(54, 162, 235, 0.2)", LILA
         // borderColor: "rgba(54, 162, 235, 1)",
          borderWidth: 5,
          data: [Frankfurt.jPlatta, (Frankfurt.jPlatta_cap-Frankfurt.jPlatta)]
        },
        {
          label: "Paronklocka",
          backgroundColor: ['#3cba9f', '#ffffff'], //"rgba(75, 192, 192, 0.2)", GRÖN
         // borderColor: "rgba(75, 192, 192, 1)",
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

function numberWithCommas(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}

function displayInfo (){
    //Display information about the warehouse in Frankfurt
    document.getElementById("FrankfurtInfo").innerHTML = "Lagernummer: " + Frankfurt.lagerID 
    + "<br>" + "Totalt antar produkter i lagret: " + numberWithCommas(Frankfurt.total_products)
    + "<br>" + "jTelefoner: " + numberWithCommas(Frankfurt.jTelefon)
    + "<br>" + "jPlattor: " + numberWithCommas(Frankfurt.jPlatta)
    + "<br>" + "Päronklockor: " + numberWithCommas(Frankfurt.Paronklocka)
    + "<br>" + "Totalt värde: " + numberWithCommas(Frankfurt.total_value);
}
    
     