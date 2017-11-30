import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directives/highlight.directive';
import { LikeComponent } from './components/like/like.component';
import { AddressComponent } from './components/address/address.component';
import { DataService } from './services/data.service';

@NgModule({
  imports: [
    CommonModule
  ],

  declarations: [HighlightDirective, 
                 LikeComponent, 
                 AddressComponent],

  exports: [
    HighlightDirective, 
    LikeComponent, 
    AddressComponent
  ],
  
  providers: [
    DataService
  ]
  
})
export class SharedModule { }
