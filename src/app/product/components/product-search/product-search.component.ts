import {Component, OnInit} from "@angular/core";

import { FormBuilder,
         FormGroup, 
         FormControl} from '@angular/forms';


import {Subscription} from "rxjs/Rx";
import { ProductService } from "../../services/product.service";
import { CartStorageService } from "../../../cart/services/cart.services";


@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent implements OnInit {

    form:FormGroup;
    searchControl: FormControl;
    products: any[] = [];
    searchText: any = '';



    subscription: Subscription;

    constructor(private productService: ProductService,
    private cartService: CartStorageService,
                private formBuilder: FormBuilder
    ) {
        this.searchControl = new FormControl("");

        this.form = formBuilder.group({
            "searchControl" : this.searchControl
        });

        
    }

    ngOnInit() {
        this.searchControl.valueChanges
        .debounceTime(400)
        .map ( (text: string) => {
            console.log("at map ", text.length);
            return text.trim()
        })
        .filter ( (text: string) => text.length > 0) // min 1 char
        .subscribe( (value: string) => {
            console.log("subscribe changed ", value, 
                        " length ", value.length);

            
            this.searchText = value;
            
            this.productService.searchProducts(this.searchText)
            .subscribe( (results: any[]) => {
                this.products = results;
            })
            
            //TODO: Search and update products
        })
    }

    addToPurchaseList($event:any) {
        console.log("addToPurchaseList at list component ", $event);
        //$event is a product object
        this.cartService.addProduct($event);
    }
  

}
