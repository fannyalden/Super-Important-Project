/************************************************************
    EXAMPLE 1: Grouped bar chart
*************************************************************/
new Chart(document.getElementById("bar-chart-grouped"), {
    type: 'bar',
    data: {
      labels: ["Cupertino", "Norrköping", "Frankfurt"],
      datasets: [
        {
          label: "jTelefon",
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1,
          data: [170000,55000,101700]
        }, 
        {
          label: "jPlatta",
          backgroundColor: "rgba(54, 162, 235, 0.2)",
          borderColor: "rgba(54, 162, 235, 1)",
          borderWidth: 1,
          data: [41500,104300,72400]
        },
        {
          label: "Päronklocka",
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
          data: [90000,38000,25000]
        }
      ]
    },
    options: {
    	legend: { display: true },
	    title: {
	        display: true,
	        text: 'Lagersaldo'
      	}/*,
        scales: {
            yAxes: [{
                display: false
            }],

        }*/
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

/************************************************************
    EXAMPLE 2: Bar chart
*************************************************************/ 
var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["jTelefon", "jPlatta", "Päronklocka", 
        		 "jTelefon", "jPlatta", "Päronklocka", 
        		 "jTelefon", "jPlatta", "Päronklocka"],
        datasets: [{
            /*label: 'Lagersaldo',*/
            data: [170000, 415000, 90000, 55000, 104300, 38000, 101700, 72400, 25000],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',		//red
                'rgba(54, 162, 235, 0.2)',		//blue
                'rgba(75, 192, 192, 0.2)',		//green

                'rgba(255, 99, 132, 0.2)',		//red
                'rgba(54, 162, 235, 0.2)',		//blue
                'rgba(75, 192, 192, 0.2)',		//green

                'rgba(255, 99, 132, 0.2)',		//red
                'rgba(54, 162, 235, 0.2)',		//blue
                'rgba(75, 192, 192, 0.2)',		//green

            /*
                'rgba(255, 99, 132, 0.2)',		//red
                'rgba(54, 162, 235, 0.2)',		//blue
                'rgba(255, 206, 86, 0.2)',		//yellow
                'rgba(75, 192, 192, 0.2)',		//green
                'rgba(153, 102, 255, 0.2)',		//purple
                'rgba(255, 159, 64, 0.2)'		//orange */
            ],
            borderColor: [
                'rgba(255,99,132,1)', 'rgba(54, 162, 235, 1)', 'rgba(75, 192, 192, 1)',
                'rgba(255,99,132,1)', 'rgba(54, 162, 235, 1)', 'rgba(75, 192, 192, 1)',
                'rgba(255,99,132,1)', 'rgba(54, 162, 235, 1)', 'rgba(75, 192, 192, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Lagersaldo'
      }
    }

/*    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }*/
});
