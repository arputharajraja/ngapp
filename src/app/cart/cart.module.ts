import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";

import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { routes } from './cart.routing';
import { CartStorageService, CartLocalStorageService } from './services/cart.services';
import { SaveAlertGuard } from './services/cart.guards';


  import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CartComponent, CheckoutComponent],

  providers: [
    {
        provide: CartStorageService,
        useClass: CartLocalStorageService
    },

    SaveAlertGuard

    //TODO: SaveAlertGuard
 ]
})
export class CartModule { }
