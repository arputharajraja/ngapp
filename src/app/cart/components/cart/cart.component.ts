import {Component} from "@angular/core";


import {Router} from "@angular/router";
import { CartStorageService } from "../../services/cart.services";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
    products: any = [];

    constructor(private cartStorageSevice: CartStorageService,
                private router: Router
    ) {
        this.products = cartStorageSevice.getProducts(); 
    }

    checkout() {
        let discount: number = Math.floor(Math.random() * 99);
        let couponCode:string = "Coupon" + discount.toString();


        this.router.navigate(["/cart/checkout", 
        {'discount': discount, 'coupon': couponCode }]);
    }

    refresh() {
        this.products = this.cartStorageSevice.getProducts(); 
    }

    removeAll() {
        this.cartStorageSevice.removeAll();
        this.refresh();
    }
}