import {Routes} from "@angular/router";
import { CheckoutComponent } from "./components/checkout/checkout.component";
import { SaveAlertGuard } from "./services/cart.guards";
import { CartComponent } from "./components/cart/cart.component";

export const routes: Routes = [
    {
        path: 'cart',
        component: CartComponent
    },

    {
        path: 'cart/checkout',
        component: CheckoutComponent,
        canDeactivate: [SaveAlertGuard]
        //TODO: Deactivate guard
    }
];
 