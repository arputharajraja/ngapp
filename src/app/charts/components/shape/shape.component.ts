import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import * as d3 from 'd3';

@Component({
  selector: 'app-shape',
  templateUrl: './shape.component.html',
  styleUrls: ['./shape.component.css']
})
export class ShapeComponent implements OnInit {

  @ViewChild("svg")
  svg: ElementRef;


  @ViewChild("svg2")
  svg2: ElementRef;

  cx: number = 40;

  constructor() { }

  ngOnInit() {
    const circle = d3.select(this.svg.nativeElement).selectAll("circle");
    circle.style("fill", "steelblue");
    circle.attr("r", 30);

    circle.attr("cx", function() { return Math.random() * 720; });

    circle.data([320, 570, 1120]);

    circle.attr("r", function(d) { return Math.sqrt(d); });

    circle.attr("cx", function(d, i) { return i * 100 + 30; });

    //this.circle2();
    this.circle2_ex();

    // setInterval( () => {
    //   this.cx += 50;
    // }, 1000);
  }

  circle2() {

      const svg2 = d3.select(this.svg2.nativeElement);
      
      const circle2 = svg2.selectAll("circle")
          .data([32, 57, 112, 293]);
      
      var circleEnter = circle2.enter().append("circle");

      circleEnter.attr("cy", 60);
      circleEnter.attr("cx", function(d, i) { return i * 100 + 30; });
      circleEnter.attr("r", function(d) { return Math.sqrt(d); });

  }

  circle2_ex() {
    const svg2 = d3.select(this.svg2.nativeElement);
    svg2.selectAll("circle")
    .data([32, 57, 112, 293])
  .enter().append("circle")
    .attr("cy", 60)
    .attr("cx", function(d, i) { return i * 100 + 30; })
    .attr("r", function(d) { return Math.sqrt(d); });
  }

  exit() {
    const svg2 = d3.select(this.svg2.nativeElement);
    var circle = svg2.selectAll("circle")
    .data([32, 57]);
    circle.exit().remove();
    

  }

}
