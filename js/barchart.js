/************************************************************
    Grouped bar chart
*************************************************************/

var Cupertino = new Cupertino();
var Norrköping = new Norrköping();
var Frankfurt = new Frankfurt();

console.log("total value: " + Cupertino.total_value);
console.log(Cupertino);
console.log("total value: " + Norrköping.total_value);
console.log(Norrköping);
console.log("total value: " + Frankfurt.total_value);
console.log(Frankfurt);

new Chart(document.getElementById("bar-chart-grouped1"), {
    type: 'bar',
    data: {
      //labels: ["Cupertino"],
      datasets: [
        {
          label: "jTelefon",
          backgroundColor: "rgba(255, 99, 132, 0.6)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1,
          data: [Cupertino.jTelefon]
        }, 
        {
          label: "jPlatta",
          backgroundColor: "rgba(54, 162, 235, 0.6)",
          borderColor: "rgba(54, 162, 235, 1)",
          borderWidth: 1,
          data: [Cupertino.jPlatta]
        },
        {
          label: "Päronklocka",
          backgroundColor: "rgba(75, 192, 192, 0.6)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
          data: [Cupertino.Päronklocka]
        }
      ]
    },
    options: {
    	legend: { display: true },
	    title: {
	        display: false,
	        text: 'Lagersaldo'
      	},
        scales: {
            yAxes: [{
                display: false
            }],

        }
    }
});

new Chart(document.getElementById("bar-chart-grouped2"), {
    type: 'bar',
    data: {
      //labels: ["Norrköping"],
      datasets: [
        {
          label: "jTelefon",
          backgroundColor: "rgba(255, 99, 132, 0.6)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1,
          data: [Norrköping.jTelefon]
        }, 
        {
          label: "jPlatta",
          backgroundColor: "rgba(54, 162, 235, 0.6)",
          borderColor: "rgba(54, 162, 235, 1)",
          borderWidth: 1,
          data: [Norrköping.jPlatta]
        },
        {
          label: "Päronklocka",
          backgroundColor: "rgba(75, 192, 192, 0.6)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
          data: [Norrköping.Päronklocka]
        }
      ]
    },
    options: {
      legend: { display: true },
      title: {
          display: false,
          text: 'Lagersaldo'
        },
        scales: {
            yAxes: [{
                display: false
            }],

        }
    }
});

new Chart(document.getElementById("bar-chart-grouped3"), {
    type: 'bar',
    data: {
      //labels: ["Frankfurt"],
      datasets: [
        {
          label: "jTelefon",
          backgroundColor: "rgba(255, 99, 132, 0.6)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1,
          data: [Frankfurt.jTelefon]
        }, 
        {
          label: "jPlatta",
          backgroundColor: "rgba(54, 162, 235, 0.6)",
          borderColor: "rgba(54, 162, 235, 1)",
          borderWidth: 1,
          data: [Frankfurt.jPlatta]
        },
        {
          label: "Päronklocka",
          backgroundColor: "rgba(75, 192, 192, 0.6)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
          data: [Frankfurt.Päronklocka]
        }
      ]
    },
    options: {
      legend: { display: true },
      title: {
          display: false,
          text: 'Lagersaldo'
        },
        scales: {
            yAxes: [{
                display: false
            }],

        }
    }
});

//https://stackoverflow.com/questions/31631354/how-to-display-data-values-on-chart-js
//Add plugin to display values of each bar
Chart.pluginService.register({
    afterDraw: function(chartInstance) {
        var ctx = chartInstance.chart.ctx;

        // render the value of the chart above the bar
        ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, 'normal', Chart.defaults.global.defaultFontFamily);
        ctx.textAlign = 'center';
        ctx.textBaseline = 'bottom';

        chartInstance.data.datasets.forEach(function (dataset) {
            for (var i = 0; i < dataset.data.length; i++) {
                var model = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model;
                ctx.fillText(dataset.data[i], model.x, model.y - 2);
            }
        });
  }
});
