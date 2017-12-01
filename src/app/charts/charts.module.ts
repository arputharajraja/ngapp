import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartHomeComponent } from './components/chart-home/chart-home.component';
import { ShapeComponent } from './components/shape/shape.component';
import { RouterModule, Routes } from '@angular/router';
import { BarChartComponent } from './components/barchart/barchart.component';
import { BasicListComponent } from './components/basic-list/basic-list.component';

const routes: Routes = [
  {
    path: 'charts',
    component: ChartHomeComponent,
    children: [
      {
        path: '',
        component: ShapeComponent
      },

      {
        path: 'barchart',
        component: BarChartComponent
      },

      {
        path: 'basic-list',
        component: BasicListComponent
      }

      
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ChartHomeComponent, ShapeComponent, BarChartComponent, BasicListComponent]
})
export class ChartsModule { }
