import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductHomeComponent } from './components/product-home/product-home.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductSearchComponent } from './components/product-search/product-search.component';
import { ProductWidgetComponent } from './components/product-widget/product-widget.component';

import {RouterModule} from "@angular/router";
import { routes } from './product.routing';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ByYearPipe } from './pipes/by-year.pipe';
import { ProductService } from './services/product.service';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
   declarations: [ByYearPipe, 
                 ProductHomeComponent, 
                 ProductListComponent, 
                 ProductEditComponent, 
                 ProductSearchComponent, 
                 ProductWidgetComponent],

  providers: [
    ProductService
  ]
})
export class ProductModule { }
