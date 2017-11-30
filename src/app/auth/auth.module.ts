import {NgModule} from "@angular/core";

import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";

import {routes} from "./auth.routing";
import { AuthService } from "./services/auth.service";
import { HttpClient } from "./services/auth.http-client";
import { AuthGuard, RoleBasedAccessGuard, AdminGuard } from "./services/auth.guards";
import { LoginComponent } from "./components/login/login.component";
import { ForbiddenComponent } from "./components/forbidden/forbidden.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        RouterModule.forRoot(routes)
    ],

    declarations: [
        LoginComponent,
        ForbiddenComponent
    ],
    
    providers: [
           AuthService,
           
           HttpClient,
           AuthGuard,
           AdminGuard,
           RoleBasedAccessGuard
    ]
})
export class AuthModule {

}