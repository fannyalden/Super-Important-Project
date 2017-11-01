/************************************************************
    Authors:  Fanny Aldén Hanna Johansson
    Date: 2017-11-01
*************************************************************/

//Create array of data to be visualized
var dataArray = [170000, 55000, 101700, 41500, 104300, 72400, 90000, 38000, 25000];

//Create the SVG element. This is where we will place all of our shapes.
//Then add attributes to the SVG.
var svg = d3.select("body").append("svg")
		.attr("height","100%")
	    .attr("width","100%");

//Add rectangles
svg.selectAll("rect")
    .data(dataArray)			//Tie this rectangle array to the data stored in dataArray	
    .enter().append("rect")		//Add a rectangle for each item in dataArray
		.attr("class", "bar")	//Add a class name
		//.attr("height","250")	//Height of the rectangles
	    .attr("height", function(d, i) {return (d * 0.002)})
	    .attr("width","60")		//Width of the rectangles
	    //.attr("x","25")			//Distance from the left side of the browser window
	    .attr("x", function(d, i) {return i * 65 + 25})		//Add spacing between the rectangles, space = 60 pixels
	    //.attr("y","50");		//Distance from the top of the browser window
	    .attr("y", function(d, i) {return 600 - (d * 0.002)});

//Add text to the bars
svg.selectAll("text")
    .data(dataArray)
    .enter().append("text")
    .text(function(d) {return d})
          .attr("class", "text")
          .attr("x", function(d, i) {return (i * 65) + 31})
          .attr("y", function(d, i) {return 620 - (d * 0.002)});

