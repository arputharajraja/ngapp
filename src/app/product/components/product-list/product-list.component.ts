import {Component, OnInit} from "@angular/core";
 

import "rxjs/Rx";

import {Subject} from "rxjs/Rx";
import { ProductService } from "../../services/product.service";
import { CartStorageService } from "../../../cart/services/cart.services";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    
    
    products: any;

    years:any = [2010, 2011, 2012, 2013, 2014, 2015, 2016];

    //two way binding for select
    year: any = "";


    constructor(private productService: ProductService,
                private cartService: CartStorageService) {
        
        console.log("product list component created");
    }

    ngOnInit() {
        console.log("ngOnInit on Product List");
         this.productService.getProducts()
         .then((data: any) => {
             this.products = data; 
             console.log(" got products ");
         });
    }

    addToPurchaseList($event:any) {
        console.log("addToPurchaseList at list component ", $event);
        //$event is a product object
        this.cartService.addProduct($event);
    }
  

    ngOnDestroy() {
          console.log("product destroy called");
    }
}
