import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-widget',
  templateUrl: './product-widget.component.html',
  styleUrls: ['./product-widget.component.css']
})
export class ProductWidgetComponent implements OnInit {

  @Input()
  product: any;

   

  @Output()
  addToShoppingCart:EventEmitter<any> = new EventEmitter<any>();

  addToCartClicked() {
      console.log("Add to cart clicked");
      this.addToShoppingCart.emit(this.product);
  }

  ngOnInit() {
      
  }

}


 
