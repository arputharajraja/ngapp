import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

import { BrandListComponent } from './components/brand-list/brand-list.component';
import { BrandEditComponent } from './components/brand-edit/brand-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';
import { BrandService } from './services/brand.service';

export const routes: Routes = [
  {
      path: 'brands',
      component: BrandListComponent
  },

  {
      path: 'brands/edit/:id/:name',
      component: BrandEditComponent
  }
];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BrandListComponent, 
                 BrandEditComponent],

  providers: [
    BrandService
  ]
})
export class BrandModule { }
