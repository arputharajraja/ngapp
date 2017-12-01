import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ProductService } from '../../../product/services/product.service';
import { Product } from '../../../product/models/product';

import * as d3 from 'd3';


@Component({
  selector: 'app-basic-list',
  templateUrl: './basic-list.component.html',
  styleUrls: ['./basic-list.component.css']
})
export class BasicListComponent implements OnInit {
  products: Product[] = [];

  @ViewChild('chart')
  chart: ElementRef;


  @ViewChild('chart2')
  chart2: ElementRef;

  svg: SVGElement;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    const element = this.chart.nativeElement;

    this.productService.getProducts()
    .then ( products => {
      this.products = products;
      this.draw();
      this.draw2();
    });

    
    //this.svg = d3.select(element).append('svg');
  }

  draw() {
    d3.select(this.chart.nativeElement)

    .append("ul")
    .selectAll("li")
    .data(this.products)
    .enter()
    .append("li")
    .text(function (product) {
    return product.name + ": " + product.price;
    });

    d3.select(this.chart.nativeElement)
    .selectAll("li")
    .style("font-weight", function (p) {
        if (p.price > 350 ){
        return "bold";
        } else {
        return "normal";
        }
    });

  }

  draw2() {

    d3.select(this.chart2.nativeElement)
    .selectAll("div.line")
    .append("div")
    .attr("class","label")
    .text(function(product){return product.name;});

    d3.select(this.chart2.nativeElement)
    .attr("class","chart")
    .selectAll(".bar")
    .data(this.products)
    .enter()
    .append("div")
    .attr("class","bar")
    .style("width", function(product){return product.price + "px"})
    .style("outline", "1px solid black")
    .text(function(d){return Math.round(d.price)});
  
    d3.select(this.chart2.nativeElement)
    .selectAll("div.line")
    .append("div")
    .attr("class","bar")
    .style("width", function(d){return d.price + "px"})
    .text(function(d){return Math.round(d.price)});
  
  }

}
