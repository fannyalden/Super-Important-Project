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
          data: [Cupertino.jTelefon, Cupertino.jTelefon_cap]
        }, 
        {
          label: "jPlatta",
          backgroundColor: ['#8e5ea2', '#ffffff'], // rgba(54, 162, 235, 0.2)", LILA
         // borderColor: "rgba(54, 162, 235, 1)",
          borderWidth: 5,
          data: [Cupertino.jPlatta, Cupertino.jPlatta_cap]
        },
        {
          label: "Paronklocka",
          backgroundColor: ['#3cba9f', '#ffffff'], //"rgba(75, 192, 192, 0.2)", GRÖN
         // borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 5,
          data: [Cupertino.Paronklocka, Cupertino.Paronklocka_cap]
        }
      ]
    },
    options: {
      title: {
	        display: true,
	        text: 'Lagersaldo i Cupertino'
      	},
    }
});