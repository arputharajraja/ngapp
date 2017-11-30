import {Routes} from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { ForbiddenComponent } from "./components/forbidden/forbidden.component";

export const routes:Routes = [
    {
        path : 'auth/login',
        component:   LoginComponent
    },

    {
        path : 'auth/forbidden',
        component:   ForbiddenComponent
    }
    ]
 