import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicComponent } from './components/basic/basic.component';
import { ReactiveHomeComponent } from './components/reactive-home/reactive-home.component';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { MapComponent } from './components/map/map.component';

const routes: Routes = [
  {
    path: 'reactive',
    component: ReactiveHomeComponent,
    children : [
      {
        path: 'basic',
        component: BasicComponent
      },

      {
        path: 'map',
        component: MapComponent
      }
    ]
  }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BasicComponent, ReactiveHomeComponent, MapComponent]
})
export class ReactiveModule { }
