import {CanDeactivate} from "@angular/router";
import { CheckoutComponent } from "../components/checkout/checkout.component";

export class SaveAlertGuard implements CanDeactivate<CheckoutComponent> {
    
  canDeactivate(target: CheckoutComponent) :any {
    if(target.form.dirty){
        return window.confirm('Do you really want to cancel?');
    }
    return true;
  }
}