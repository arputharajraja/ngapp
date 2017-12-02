import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import * as d3 from 'd3';

@Component({
  selector: 'app-simplepie',
  templateUrl: './simplepie.component.html',
  styleUrls: ['./simplepie.component.css']
})
export class SimplepieComponent implements OnInit {
  
  @ViewChild('chart')
  chart: ElementRef;


  @ViewChild('chart2')
  chart2: ElementRef;

  constructor() { }

  ngOnInit() {
    //this.draw();
    this.drawChart2(); 
  }

  draw() {
        let w = 300,                        //width
        h = 300,                            //height
        r = 100,                            //radius
        color = d3.scaleOrdinal(d3.schemeCategory20c);     //builtin range of colors

        let data = [{"label":"one", "value":20}, 
                {"label":"two", "value":50}, 
                {"label":"three", "value":30}];
        
        var vis = d3.select(this.chart.nativeElement)
            .append("svg:svg")              //create the SVG element inside the <body>
            .data([data])                   //associate our data with the document
                .attr("width", w)           //set the width and height of our visualization (these will be attributes of the <svg> tag
                .attr("height", h)
            .append("svg:g")                //make a group to hold our pie chart
                .attr("transform", "translate(" + r + "," + r + ")")    //move the center of the pie chart from 0, 0 to radius, radius

        var arc = d3.arc()              //this will create <path> elements for us using arc data
            .outerRadius(r);

        var pie = d3.pie()           //this will create arc data for us given a list of values
            .value(function(d) { return d.value; });    //we must tell it out to access the value of each element in our data array

        var arcs = vis.selectAll("g.slice")     //this selects all <g> elements with class slice (there aren't any yet)
            .data(pie)                          //associate the generated pie data (an array of arcs, each having startAngle, endAngle and value properties) 
            .enter()                            //this will create <g> elements for every "extra" data element that should be associated with a selection. The result is creating a <g> for every object in the data array
                .append("svg:g")                //create a group to hold each slice (we will have a <path> and a <text> element associated with each slice)
                    .attr("class", "slice");    //allow us to style things in the slices (like text)

            arcs.append("svg:path")
                    .attr("fill", function(d, i) { return color(i); } ) //set the color for each slice to be chosen from the color function defined above
                    .attr("d", arc);                                    //this creates the actual SVG path using the associated data (pie) with the arc drawing function

            arcs.append("svg:text")                                     //add a label to each slice
                    .attr("transform", function(d) {                    //set the label's origin to the center of the arc
                    //we have to make sure to set these before calling arc.centroid
                    d.innerRadius = 0;
                    d.outerRadius = r;
                    return "translate(" + arc.centroid(d) + ")";        //this gives us a pair of coordinates like [50, 50]
                })
                .attr("text-anchor", "middle")                          //center the text on it's origin
                .text(function(d, i) { return data[i].label; });        //get the label from our original data array
            
  }

  drawChart2() {
    var data = [10, 50, 80];
    var r = 300; // outer radius 
    
    var color = d3.scaleOrdinal(d3.schemeCategory20c);

    //  .range(["red", "blue", "orange"]);
    
    var svg = d3.select(this.chart2.nativeElement)
            .append("svg")
        .attr("width", 700)
        .attr("height", 700);
    
    var group = svg.append("g")
      .attr("transform", "translate(300, 300)"); // set center of pie to 300,300
    
    var arc = d3.arc()
      //.innerRadius(150)
        .innerRadius(function(d) { 
          console.log("D is ", d);
          return 100 + d.value + Math.ceil(Math.random() * 50);
         })
      .outerRadius(r);
    
    var pie = d3.pie()
      .value(function(d) { return d; }); // pie function transform data into specific format
    
    var arcs = group.selectAll(".arc")
      .data(pie(data))
      .enter()
      .append("g")
        .attr("class", "arc");
    
    arcs.append("path")
      .attr("d", arc) // here the arc function works on every record d of data 
      .attr("fill", function(d){ return color(d.data); });
    
    arcs.append("text")
      .attr("transform", function(d){ return "translate(" + arc.centroid(d) + ")"; }) // put text at the center of every arc
      .attr("text-anchor", "middle")
      .attr("font-size", "1.5em")
      .text(function(d) { return d.data; });
  }
}
