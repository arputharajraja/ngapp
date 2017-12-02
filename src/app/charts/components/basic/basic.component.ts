import { Component, OnInit, 
         ViewChild, 
         ElementRef } from '@angular/core';

import * as d3 from 'd3';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {

  @ViewChild('chart')
  chart: ElementRef;


  @ViewChild('chart2')
  chart2: ElementRef;

  
 
  chartType: string = 'horizontal';

  constructor() { }

  ngOnInit() {
   //this.horizontalBarChart();
   this.verticalBarChartAdvanced();

   this.textRender();
  }
 

  horizontalBarChart() {
    let data = [100, 200, 300, 500, 50, 400];
    let height = 300;
    let width = 600;
    let barPadding = 5;
    let barSpacing = height / data.length;
    let barHeight = barSpacing - barPadding;
    let maxValue = d3.max(data);
    let widthScale = width / maxValue;

      //builtin range of colors
    
    let color = d3.scaleOrdinal(d3.schemeCategory20c);   
    

    d3.select(this.chart.nativeElement)
    .append('svg')
    .attr('height', height)
    .attr('width', width)
    .selectAll('rect')
    .data(data)
      .enter()
    .append('rect')
      .attr('y', function(d, i) { return i * barSpacing; })
      .attr('height', barHeight)
      .attr('x', 0)
      .attr('width', function(d) { return d * widthScale; } )
      //.style('fill', 'steelblue');
      .style('fill', function(d, i) { return color(i); })
  }

  verticalBarChart() {
    let data = [100, 200, 300, 500, 50, 400];
    let height = 300;
    let width = 600;
    let barPadding = 5;
    let barSpacing = width / data.length;
    let barWidth = barSpacing - barPadding;
    let maxValue = d3.max(data);
    let heightScale = height / maxValue;

    //builtin range of colors

    let color = d3.scaleOrdinal(d3.schemeCategory20c);

 


    d3.select(this.chart.nativeElement)
    .append('svg')
    .attr('height', height)
    .attr('width', width)
    .selectAll('rect')
    .data(data)
      .enter()
    .append('rect')
      .attr('x', function(d, i) { return i * barSpacing; })
      .attr('width', barWidth)
      .attr('y', 100)
      .attr('height', function(d) { return (d * heightScale); } )
      
      //.style('fill', 'steelblue');
      .style('fill', function(d, i) { return color(i); })
  }


  verticalBarChartAdvanced() {
    let data = [100, 200, 300, 500, 50, 400];
    let height = 300;
    let width = 600;
    let barPadding = 5;
    let barSpacing = width / data.length;
    let barWidth = barSpacing - barPadding;
    let maxValue = d3.max(data);
    let heightScale = height / maxValue;

    //builtin range of colors

    let color = d3.scaleOrdinal(d3.schemeCategory20c);

 
    
    var x = d3.scaleLinear()
    .domain([0, d3.max(data)])  // input range
    .range([0, width]);  // width

    var y = d3.scaleOrdinal()
        .domain(data)
        .range([0, height]);


    let chart = d3.select(this.chart.nativeElement)
    .append('svg')
    .attr('height', height)
    .attr('width', width);

    chart
    .selectAll('line')
    .data(x.ticks(10))
    .enter()
      .append('line')
      .attr('class', 'divider')
      .attr('x1', x)
      .attr('x2', x)
      .attr('y1', 0)
      .attr('y2', height);


    chart
    .selectAll('rect')
    .data(data)
      .enter()
    .append('rect')
      .attr('x', function(d, i) { return i * barSpacing; })
      .attr('width', barWidth)
      .attr('y', 100)
      .attr('height', function(d) { return (d * heightScale); } )
       
      .style('fill', function(d, i) { return color(i); });



      chart.selectAll("text")
      .data(data)
      .enter()
      .append("text")
        .attr('x', function(d, i) { return 50 + i * barSpacing; })
        .attr('y', 60)
        .attr('dx', -3)
        .attr('dy', ".35em")
        .attr("text-anchor", "end" )
         
      .text(function(d) {
        console.log("DDD", d);
        return d.toString()
      });


      var circle = chart.append("line")
      .attr("x1", 5)
      .attr("y1", height - 10)
      .attr("x2", width)
      .attr("y2", height - 10)
      .attr('class', 'line-style')

        .attr({
          "stroke-width": 5,
          "stroke": "black"
      });


  }


  textRender() {
    
    let data = [100, 200, 300, 500, 50, 400];

    let chart = d3.select(this.chart2.nativeElement)
    .append('svg')
    .attr('height', 400)
    .attr('width', 600);

    // chart.selectAll('text')
    // .data(data)
    // .enter()
    //   .append('text')
    //   .attr('x', function(d, i) { return i * 60; })
    //   .attr('y', 60)
    //   .style('color', 'blue')
    //   .style('font-size', '20px')
    //   .text(String);

    
    //   chart.append("line")
    //   .attr({
    //      // "class": "origin",
    //       "x1": 20,
    //       "y1": 10,
    //       "x2": 300,
    //       "y2": 20,
    //       "stroke-width": 2,
    //       "stroke": "black"
    //   });


  var circle = chart.append("line")
                            .attr("x1", 5)
                            .attr("y1", 5)
                          .attr("x2", 100)
                          .attr("y2", 100)
                          .attr('class', 'line-style')

                             .attr({
                              "stroke-width": 5,
                              "stroke": "black"
                          });

    }
  


}
