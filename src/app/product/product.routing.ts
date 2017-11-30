import {Routes} from "@angular/router";
import { ProductHomeComponent } from "./components/product-home/product-home.component";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { ProductEditComponent } from "./components/product-edit/product-edit.component";
import { ProductSearchComponent } from "./components/product-search/product-search.component";
import { AuthGuard, AdminGuard } from "../auth/services/auth.guards";


export const routes:Routes = [
    {
        path: "products", // "/products"
        component : ProductHomeComponent,
        canActivate: [AuthGuard],

        children: [
            {
                path: '', // /products
                 
                redirectTo: 'list',
                pathMatch : 'prefix',
                //component: ProductListComponent,
                canActivate: [AuthGuard]
            },

            {
                path: 'list', // /products/list
                component: ProductListComponent,
                canActivate: [AuthGuard]
                
            },

            {
                path: 'edit/:id',  //products/edit/1
                component: ProductEditComponent,
                data: {
                    roles: ['Admin', 'Staff']
                },
                
                canActivate: [AuthGuard, AdminGuard]
            },

            {
                path: "create", //products/create
                component: ProductEditComponent,
                canActivate: [AuthGuard]
            },

            {
                path: 'search',
                component: ProductSearchComponent,
                canActivate: [AuthGuard]
            }
        ]
    }
]