import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";

 
import {ProductModule} from "./product/product.module";
import {BrandModule} from "./brand/brand.module";
import {CartModule} from "./cart/cart.module";
import {AuthModule} from "./auth/auth.module";
import {ErrorModule} from "./error/error.module";

import {LocationStrategy, 
       HashLocationStrategy,
       PathLocationStrategy //HTML 5,default
      }  from "@angular/common";


import { AppComponent } from './app.component';
 
import {Http} from "@angular/http";
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SharedModule } from './shared/shared.module';
import { routes } from './app.routing';

import { environment } from '../environments/environment';

 


@NgModule({
  imports:      [ 
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule,

    RouterModule.forRoot(routes),

    //TranslateModule.forRoot(),

    /*
    TranslateModule.forRoot({
            provide: TranslateLoader,
            useFactory: (http: Http) => new TranslateStaticLoader(http, '/assets/i18n', '.json'),
            deps: [Http]
        }),
        */
    SharedModule,
    ProductModule,
    BrandModule,
    CartModule,
    AuthModule
  ],
  declarations: [ 
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent
  ],

  exports: [
     
  ],
  
  providers: [
    {
      provide: "apiEndPoint",
      useValue:  environment.apiEndPoint
    },

    {
      provide: "authApiEndPoint",
      useValue: environment.apiEndPoint
    },

    // {
    //   provide : LocationStrategy,
    //   useClass: HashLocationStrategy //HashLocationStrategy
    // }

  ],

  bootstrap: [ 
    AppComponent 
  ]
})
export class AppModule { }